const router = require('express').Router();
const {
  createRegister,
  getRegister
} = require('../controllers/register');

router.route('/')
  .post(createRegister);

router.route('/:id')
  .get(getRegister)

module.exports = router;
