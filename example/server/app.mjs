import http from 'http';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('*', (req, res, next) => {
  const ip = req.ip;
  const method = req.method;
  const url = req.originalUrl;
  console.log('[', method, '/', ip, ']', '=>', url);
  next();
});

import multer from 'multer';

app.post('/file', (req, res) => {
  multer({ storage: multer.memoryStorage() }).single('file')(
    req,
    res,
    (error) => {
      if (error) {
        console.warn(error);
        res.status(500).send(error);
        return;
      }

      console.log(req.body);
      console.log(req.file);
      res.send('ok');
    }
  );
});

app.all('*', (req, res) => {
  res.send('ok');
});

http.createServer(app).listen(port, () => {
  console.log('Request test server listening on :' + port);
});
