import Router from 'koa-router';
import * as cont from './controller';

const router = new Router();

router.get('/login/:provider', cont.login);

export default router;