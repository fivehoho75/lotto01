import models from './models';
import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import api from './router';

const app = new koa();
const router = new Router();

let port = 4000;

app.use( bodyParser() );
app.use( logger() );

router.get('/', async function(ctx, next) { 
  ctx.body = 'hello, world!'; 
});

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => 
    console.log('Server is running on Port: ', port));