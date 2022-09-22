import Request from '../request-window-fetch.mjs';

async function FilesPostRequest(uri, body) {
  return new Promise((resolve, reject) => {
    var formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    new Request(
      uri,
      {
        method: 'POST',
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
