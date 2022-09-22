/**
 * @wany/request
 *
 * request-window-fetch.mjs
 *
 * (c) 2022 Wany
 *
 * @summary HTTP / HTTPS request modules
 * @author Wany <sung@wany.io> (https://wany.io)
 */

import EventEmitter from '@wany/eventemitter';

class Request extends EventEmitter {
  constructor(uri, options = {}, body = {}) {
    super();

    if (!uri) {
      throw new Error('URI does not exist');
    }
    if (typeof uri != 'string') {
      throw new Error('URI must typeof string');
    }

    this.uri = encodeURI(uri);

    const m =
      /(https?):\/?\/?([^/]+\.[^./: ]+):?([0-9]{1,5})?(\/[^?]+)?(\?.+)?/i.exec(
        this.uri
      );

    this.protocol = window.fetch.bind(window);
    this.host = m[2];
    this.port = new Number(m[3] || m[1] == 'https' ? 443 : 80) * 1;
    this.path = m[4] || '';
    this.query = m[5] || '';

    this.path = this.path;
    this.query = this.query;

    this.method = options.method || 'GET';
    this.headers = options.headers || {};
    this.credentials = options.credentials || 'include';

    this.body = body;

    if (!(body instanceof FormData)) {
      this.body = JSON.stringify(body);
    }

    this.res = new Object();

    this.req = this.protocol(this.uri, {
      method: this.method,
      headers: this.headers,
      credentials: this.credentials,
      body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(this.method)
        ? this.body
        : undefined,
    })
      .then((res) => this.response(res))
      .catch((error) => {
        this.emit('error', error);
      });

    return this;
  }

  response(response) {
    if (
      this.headers['Content-Type'] &&
      this.headers['Content-Type'].match(/application\/json/)
    ) {
      this.JSONResponse(response);
    } else {
      this.stringResponse(response);
    }
  }

  responseStatus(response) {
    const status = response.status;
    this.res.status = status;
    this.res.headers = {};
    for (const key of response.headers.keys()) {
      this.res.headers[key] = response.headers.get(key);
    }
    this.emit('response', this.res);
    this.emit('res', this.res);
    this.emit('r', this.res);
    this.emit(status, this.res);
    if (100 <= status && status < 200) {
      this.emit('info', this.res);
      this.emit('i', this.res);
    } else if (200 <= status && status < 300) {
      this.emit('success', this.res);
      this.emit('ok', this.res);
      this.emit('s', this.res);
      this.emit('o', this.res);
    } else if (300 <= status && status < 400) {
      this.emit('redirect', this.res);
      this.emit('redir', this.res);
      this.emit('d', this.res);
    } else if (400 <= status && status < 500) {
      this.emit('error', this.res);
      this.emit('err', this.res);
      this.emit('e', this.res);
    } else if (500 <= status && status < 600) {
      this.emit('error', this.res);
      this.emit('err', this.res);
      this.emit('e', this.res);
    } else {
      this.emit('what', this.res);
    }
  }

  stringResponse(response) {
    response.text().then((text) => {
      this.res.content = text;
      this.responseStatus(response);
    });
  }

  JSONResponse(response) {
    response.text().then((text) => {
      let json = {};
      try {
        json = JSON.parse(text);
      } catch (error) {
        log.error(error);
      }
      this.res.content = json;
      this.responseStatus(response);
    });
  }
}

async function FilesPostRequest(uri, body) {
  return new Promise((resolve, reject) => {
    var formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    new Request(
      uri,
      {
        method: 'POST',
        credentials: 'include',
      },
      formData
    )
      .on('ok', (res) => {
        resolve(res.content);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function DownloadGetRequest(uri, name) {
  return new Promise((resolve, reject) => {
    new Request(uri, {
      method: 'GET',
      credentials: 'include',
    })
      .on('ok', (res) => {
        saveBlob(new Blob([res.content]), name);
        resolve(res.content);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
  function saveBlob(blob, name) {
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = name;
    a.dispatchEvent(new MouseEvent('click'));
  }
}

export { FilePostRequest, DownloadGetRequest };
