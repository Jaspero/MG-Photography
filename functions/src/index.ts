import * as functions from 'firebase-functions';
import {createUser} from './callable/create-user';
import {removeUser} from './callable/remove-user';
import {api} from './rest/api';
import {exportData} from './rest/export-data';
import {importData} from './rest/import-data';
import {fileCreated} from './triggers/file-created';
import {fileDeleted} from './triggers/file-deleted';
import {userCreated} from './triggers/user-created';
import {userDeleted} from './triggers/user-deleted';
import {jsonSchemaToTypescript} from './callable/json-schema-to-typescript';
import {documentDeleted} from './triggers/document-deleted';
import {getExamples} from './callable/get-examples';
import {app} from './ssr';

export const ssr = functions.https.onRequest(app);

export const cms = {
  // Triggers
  userCreated,
  userDeleted,
  fileCreated,
  fileDeleted,
  documentDeleted,

  // Callable
  createUser,
  removeUser,
  jsonSchemaToTypescript,
  getExamples,

  // Rest
  exportData,
  importData,
  api

};
