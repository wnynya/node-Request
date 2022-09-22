import Request from '../request.mjs';
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
