const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = Router();

app.use( async (ctx, next) => {
    console.log('hi, i am middleware');
    await next();
})

// 設定根路徑的處理函數
router.get('/', async function(ctx) {
    // console.log('here', ctx)
    var data = {
        name : 'AndrewChen',
        age: 24
    }
    ctx.body = data
});

app.use(router.routes());

app.listen(3001);
