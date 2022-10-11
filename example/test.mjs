import { Request } from '../src/index.mjs';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ___filename = fileURLToPath(import.meta.url);
const ___dirname = path.dirname(___filename);

import { FormDataPostRequest } from '../src/index.mjs';

import { GetRequest } from '../src/index.mjs';

GetRequest('http://wany.io').then(console.log).catch(console.warn);
