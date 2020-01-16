const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { find, findOne, create, update, upload } = require('../controller/users');

router.get('/', find);

router.get('/:id', findOne);

router.post('/', create);

router.patch('/:id', update);

router.post('/upload', upload);

module.exports = router;
