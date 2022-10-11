"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDataPatchRequest = FormDataPatchRequest;
exports.FormDataPostRequest = FormDataPostRequest;
exports.FormDataPutRequest = FormDataPutRequest;
exports.FormDataRequest = FormDataRequest;
var _urirequest = require("./urirequest.js");
var _formData = _interopRequireDefault(require("form-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function FormDataRequest(uri, body, method, headers = {}) {
  return new Promise((resolve, reject) => {
    const formData = new _formData.default();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    const formHeaders = formData.getHeaders();
    for (const key in headers) {
      formHeaders[key] = headers[key];
    }
    return (0, _urirequest.URIRequest)(uri, formData, method, formHeaders);
  });
}
async function FormDataPostRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'POST', {
    Authorization: auth
  });
}
async function FormDataPutRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'PUT', {
    Authorization: auth
  });
}
async function FormDataPatchRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'PATCH', {
    Authorization: auth
  });
}