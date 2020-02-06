import * as cors from 'cors';

export const CORS = cors({
  origin: [
    'https://mg-photography-cms.web.app',
    'https://mg-photography-cms.firebaseapp.com'
  ],
  optionsSuccessStatus: 200,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true
});
