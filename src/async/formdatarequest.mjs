import { URIRequest } from './urirequest.mjs';
import FormData from 'form-data';

async function FormDataRequest(uri, body, method, headers = {}) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    const formHeaders = formData.getHeaders();
    for (const key in headers) {
      formHeaders[key] = headers[key];
    }
    return URIRequest(uri, formData, method, formHeaders);
  });
}

async function FormDataPostRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'POST', { Authorization: auth });
}

async function FormDataPutRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'PUT', { Authorization: auth });
}

async function FormDataPatchRequest(uri, body, auth) {
  return FormDataRequest(uri, body, 'PATCH', { Authorization: auth });
}

export {
  FormDataRequest,
  FormDataPostRequest,
  FormDataPutRequest,
  FormDataPatchRequest,
};
