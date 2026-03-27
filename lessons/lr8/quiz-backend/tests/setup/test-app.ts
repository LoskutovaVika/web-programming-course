import { Hono } from 'hono';
import auth from '../../src/routes/auth.js';
import { sessions } from '../../src/routes/sessions.js';
import { admin } from '../../src/routes/admin.js';
export const createTestApp = () => {
  const app = new Hono();
  app.route('/api/auth', auth);
  app.route('/api/sessions', sessions);
  app.route('/api/admin', admin);
  return app;
};