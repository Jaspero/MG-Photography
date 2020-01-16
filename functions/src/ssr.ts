import * as express from 'express';
const { sapper } = require('./../__sapper__/build/server/server');

export const app = express().use(sapper.middleware());
