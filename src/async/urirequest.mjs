import Request from '../request.mjs';

async function URIRequest(uri, body, method, headers = {}) {
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
        resolve(res);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function HeadRequest(uri, auth) {
  return URIRequest(uri, undefined, 'HEAD', { Authorization: auth });
}

async function GetRequest(uri, auth) {
  return URIRequest(uri, undefined, 'GET', { Authorization: auth });
}

async function PostRequest(uri, body, auth) {
  return URIRequest(uri, body, 'POST', { Authorization: auth });
}

async function PutRequest(uri, body, auth) {
  return URIRequest(uri, body, 'PUT', { Authorization: auth });
}

async function PatchRequest(uri, body, auth) {
  return URIRequest(uri, body, 'PATCH', { Authorization: auth });
}

async function DeleteRequest(uri, body, auth) {
  return URIRequest(uri, body, 'DELETE', { Authorization: auth });
}

export {
  URIRequest,
  HeadRequest,
  GetRequest,
  PostRequest,
  PutRequest,
  PatchRequest,
  DeleteRequest,
};
