const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { find, findAge } = require('../controllers/users');

router.get('/', find);
router.get('/:name', findAge);

module.exports = router;
