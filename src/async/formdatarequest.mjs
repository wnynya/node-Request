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
    URIRequest(uri, formData, method, formHeaders)
      .then((req) => {
        try {
          const json = JSON.parse(req.body);
          req.body = json;
        } catch (e) {}
        resolve(req);
      })
      .catch((req) => {
        try {
          const json = JSON.parse(req.body);
          req.body = json;
        } catch (e) {}
        reject(req);
      });
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
