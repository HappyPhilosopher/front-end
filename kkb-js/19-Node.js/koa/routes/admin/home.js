const Router = require('koa-router');
const router = new Router({ prefix: '/admin' });
const { index } = require('../../controllers/admin/home');

router.get('/', index);

module.exports = router;
