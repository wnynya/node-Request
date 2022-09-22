/**
 * @wany/request
 *
 * request.mjs
 *
 * (c) 2022 Wany
 *
 * @summary HTTP / HTTPS request modules
 * @author Wany <sung@wany.io> (https://wany.io)
 */

import EventEmitter from '@wany/eventemitter';
import http from 'http';
import https from 'https';

class Request extends EventEmitter {
  constructor(uri, options = {}, body) {
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

    this.protocol = m[1] == 'https' ? https : http;
    this.host = m[2];
    this.port = new Number(m[3] || m[1] == 'https' ? 443 : 80) * 1;
    this.path = m[4] || '';
    this.query = m[5] || '';

    this.path = this.path;
    this.query = this.query;

    this.method = options.method || 'GET';
    this.headers = options.headers || {};

    this.pipeReader = null;

    for (const key in this.headers) {
      if (this.headers[key] == null || this.headers[key] == undefined) {
        delete this.headers[key];
      }
    }

    this.body = body;

    this.res = {};
    this.res.request = {
      uri: this.uri,
      method: this.method,
      headers: this.headers,
    };
    this.req = this.protocol
      .request(
        {
          hostname: this.host,
          port: this.port,
          path: this.path + this.query,
          method: this.method,
          headers: this.headers,
        },
        (res) => {
          if (this.pipeReader) {
            res.pipe(this.pipeReader);
          }
          this.data = '';
          res.on('data', (chunk) => {
            this.data += new String(chunk);
          });
          res.on('end', () => {
            this.response(res);
          });
        }
      )
      .on('error', (error) => {
        console.error(error);
        this.emit('error', error);
      });

    if (this.body && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(this.method)) {
      if (this.body.pipe) {
        this.body.pipe(this.req);
      } else {
        this.req.write(JSON.stringify(this.body));
        this.req.end();
      }
    }
    this.req.end();

    return this;
  }

  pipe(s) {
    this.pipeReader = s;
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
    const status = response.statusCode;
    this.res.status = status;
    this.res.headers = response.headers;
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
    let text = this.data;
    this.res.content = text;
    this.responseStatus(response);
  }

  JSONResponse(response) {
    let text = !this.data || this.data == '' ? '{}' : this.data;
    let json = {};
    try {
      json = JSON.parse(text);
    } catch (error) {
      this.res.error = error;
    }
    this.res.content = json;
    this.responseStatus(response);
  }
}

export default Request;
