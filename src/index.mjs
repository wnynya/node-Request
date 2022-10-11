import Request from './request.mjs';
import {
  URIRequest,
  HeadRequest,
  GetRequest,
  PostRequest,
  PutRequest,
  PatchRequest,
  DeleteRequest,
} from './async/urirequest.mjs';
import {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
} from './async/jsonrequest.mjs';
import {
  FormDataRequest,
  FormDataPostRequest,
  FormDataPutRequest,
  FormDataPatchRequest,
} from './async/formdatarequest.mjs';

export default Request;

export { Request };
export {
  URIRequest,
  HeadRequest,
  GetRequest,
  PostRequest,
  PutRequest,
  PatchRequest,
  DeleteRequest,
};
export {
  JSONRequest,
  JSONGetRequest,
  JSONPostRequest,
  JSONPutRequest,
  JSONPatchRequest,
  JSONDeleteRequest,
};
export {
  FormDataRequest,
  FormDataPostRequest,
  FormDataPutRequest,
  FormDataPatchRequest,
};
