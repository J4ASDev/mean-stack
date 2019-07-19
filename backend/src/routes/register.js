const router = require('express').Router();
const {
  getListRegisters,
  createRegister,
  getRegister
} = require('../controllers/register');

router.route('/')
  .get(getListRegisters)
  .post(createRegister);

router.route('/:id')
  .get(getRegister)

module.exports = router;
