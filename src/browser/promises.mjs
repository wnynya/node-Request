import Request from './request.mjs';

async function URIRequest(uri, body, method, headers) {
  return new Promise((resolve, reject) => {
    new Request(
      uri,
      {
        method: method,
        headers: headers,
      },
      body
    )
      .on('ok', (res) => {
        resolve(res.content);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function GetRequest(uri, auth) {
  return URIRequest(uri, undefined, 'GET', { Authorization: auth });
}

async function PostRequest(uri, body, auth) {
  return URIRequest(uri, body, 'POST', { Authorization: auth });
}

export { URIRequest, GetRequest, PostRequest };

async function JSONRequest(uri, body, method, auth) {
  return URIRequest(uri, body, method, {
    'Content-Type': 'application/json',
    Authorization: auth,
  });
}

async function JSONGetRequest(uri, auth) {
  return JSONRequest(uri, undefined, 'GET', auth);
}

async function JSONPostRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'POST', auth);
}

async function JSONPutRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PUT', auth);
}

async function JSONPatchRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PATCH', auth);
}

async function JSONDeleteRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'DELETE', auth);
}

export {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
};

import FormData from 'form-data';

async function FilePostRequest(uri, body) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    new Request(
      uri,
      {
        method: 'POST',
        headers: formData.getHeaders(),
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

export { FilePostRequest };
