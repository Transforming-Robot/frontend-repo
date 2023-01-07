import { rest } from 'msw';
import { apiURL } from '@/common/apiURL';

export const userRegisterHandlers = [
  rest.post(`${apiURL}/users/register`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),
];
