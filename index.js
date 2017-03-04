const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = Router();

app.use(logger());
app.use(bodyParser());

app.use( async (ctx, next) => {
    // console.log('hi, i am middleware');
    await next();
})

router.get('/user/:id', async ctx => {
    var data = {
        id : ctx.params.id,
        name : 'AndrewChen',
        age: 24,
        message: ctx.query.msg || null,
    }
    ctx.body = data
});

router.post('/user', async ctx => {
    ctx.body = ctx.request.body;
});

router.get('/error', async ctx => {
    ctx.throw(400);
    // throw error code 之後的程式碼就不會被執行了
})

// 這邊 error handler 有問題, 無論如何都是 404 = =|||
app.use( async (ctx, next) => {
    // console.log('hi, i am error handler, ', ctx.response.status);
    if(ctx.response.status == 404) {
        console.log('找不到頁面');
    }
    else if(ctx.response.status == 400) {
        console.log('伺服器錯誤');
    }
    await next();
})

app.use(router.routes());

app.listen(3001);
