const Request = require('../');

Request.GetRequest('http://wany.io').then(console.log).catch(console.warn);
