import Request from '../request.mjs';

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
