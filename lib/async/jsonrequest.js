"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONDeleteRequest = JSONDeleteRequest;
exports.JSONGetRequest = JSONGetRequest;
exports.JSONPatchRequest = JSONPatchRequest;
exports.JSONPostRequest = JSONPostRequest;
exports.JSONPutRequest = JSONPutRequest;
exports.JSONRequest = JSONRequest;
var _urirequest = require("./urirequest.js");
async function JSONRequest(uri, body, method, headers = {}) {
  const formHeaders = {
    'Content-Type': 'application/json'
  };
  for (const key in headers) {
    formHeaders[key] = headers[key];
  }
  return (0, _urirequest.URIRequest)(uri, body, method, formHeaders);
}
async function JSONGetRequest(uri, auth) {
  return JSONRequest(uri, undefined, 'GET', {
    Authorization: auth
  });
}
async function JSONPostRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'POST', {
    Authorization: auth
  });
}
async function JSONPutRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PUT', {
    Authorization: auth
  });
}
async function JSONPatchRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'PATCH', {
    Authorization: auth
  });
}
async function JSONDeleteRequest(uri, body, auth) {
  return JSONRequest(uri, body, 'DELETE', {
    Authorization: auth
  });
}