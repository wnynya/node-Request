import { URIRequest } from './string.mjs';

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
