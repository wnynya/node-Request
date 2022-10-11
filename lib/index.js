"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DeleteRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.DeleteRequest;
  }
});
Object.defineProperty(exports, "FormDataPatchRequest", {
  enumerable: true,
  get: function () {
    return _formdatarequest.FormDataPatchRequest;
  }
});
Object.defineProperty(exports, "FormDataPostRequest", {
  enumerable: true,
  get: function () {
    return _formdatarequest.FormDataPostRequest;
  }
});
Object.defineProperty(exports, "FormDataPutRequest", {
  enumerable: true,
  get: function () {
    return _formdatarequest.FormDataPutRequest;
  }
});
Object.defineProperty(exports, "FormDataRequest", {
  enumerable: true,
  get: function () {
    return _formdatarequest.FormDataRequest;
  }
});
Object.defineProperty(exports, "GetRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.GetRequest;
  }
});
Object.defineProperty(exports, "HeadRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.HeadRequest;
  }
});
Object.defineProperty(exports, "JSONDeleteRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONDeleteRequest;
  }
});
Object.defineProperty(exports, "JSONGetRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONGetRequest;
  }
});
Object.defineProperty(exports, "JSONPatchRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONPatchRequest;
  }
});
Object.defineProperty(exports, "JSONPostRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONPostRequest;
  }
});
Object.defineProperty(exports, "JSONPutRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONPutRequest;
  }
});
Object.defineProperty(exports, "JSONRequest", {
  enumerable: true,
  get: function () {
    return _jsonrequest.JSONRequest;
  }
});
Object.defineProperty(exports, "PatchRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.PatchRequest;
  }
});
Object.defineProperty(exports, "PostRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.PostRequest;
  }
});
Object.defineProperty(exports, "PutRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.PutRequest;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function () {
    return _request.default;
  }
});
Object.defineProperty(exports, "URIRequest", {
  enumerable: true,
  get: function () {
    return _urirequest.URIRequest;
  }
});
exports.default = void 0;
var _request = _interopRequireDefault(require("./request.js"));
var _urirequest = require("./async/urirequest.js");
var _jsonrequest = require("./async/jsonrequest.js");
var _formdatarequest = require("./async/formdatarequest.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _request.default;
exports.default = _default;