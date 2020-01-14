const Router = require('koa-router');
const router = new Router();
const { index } = require('../../controllers/web/home');

router.get('/', index);

module.exports = router;
