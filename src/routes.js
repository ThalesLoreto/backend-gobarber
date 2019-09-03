import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thales Loreto',
    email: 'thales@unicamp.br',
    password_hash: 'thales123',
    provider: true,
  });

  res.json(user);
});

export default routes;
