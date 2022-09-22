import Request from './src/request.mjs';
import { URIRequest, GetRequest, PostRequest } from './src/async/string.mjs';
import {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
} from './src/async/json.mjs';
import { FilePostRequest } from './src/async/filepost.mjs';

export default Request;

export { Request };
export { URIRequest, GetRequest, PostRequest };
export {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
};
export { FilePostRequest };
