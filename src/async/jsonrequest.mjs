import { URIRequest } from './urirequest.mjs';

async function JSONRequest(uri, body, method, headers = {}) {
  const formHeaders = {
    'Content-Type': 'application/json',
  };
  for (const key in headers) {
    formHeaders[key] = headers[key];
  }
  return URIRequest(uri, body, method, formHeaders);
}

async function JSONGetRequest(uri, auth) {
  return JSONRequest(uri, undefined, 'GET', { Authorization: auth });
}

async function JSONPostRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'POST', { Authorization: auth });
}

async function JSONPutRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PUT', { Authorization: auth });
}

async function JSONPatchRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PATCH', { Authorization: auth });
}

async function JSONDeleteRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'DELETE', { Authorization: auth });
}

export {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
};
