import * as functions from 'firebase-functions';
import {readdir, readJson} from 'fs-extra';
import {ExampleType} from '../enums/example-type.enum';
import {join} from 'path';

export const getExamples = functions.https.onCall(
  async (type: ExampleType, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called ' + 'while authenticated.'
      );
    }

    const dirPath = join(__dirname, `../examples/${type}/`);
    const names = await readdir(dirPath);
    const content = await Promise.all(
      names.map(async name => readJson(join(dirPath, name)))
    );

    return names.map((name, index) => ({
      name: name.split('.')[0],
      json: content[index]
    }));
  }
);
