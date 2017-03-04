const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = Router();

app.use( async (ctx, next) => {
    console.log('hi, i am middleware');
    await next();
})

router.get('/', async function(ctx) {
    var data = {
        name : 'AndrewChen',
        age: 24
    }
    ctx.body = data
});

app.use(router.routes());

app.listen(3001);
