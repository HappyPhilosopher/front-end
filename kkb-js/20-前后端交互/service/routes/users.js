const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { find } = require('../controller/users');

router.get('/', find);

module.exports = router;
