const Register = require('../models/register');
const matchOfValues = require('../libs/matchOfValues');

const register = {
  getListRegisters: async (req, res) => {
    const registers = await Register.find({});
    res.json(registers);
  },

  createRegister: async (req, res) => {
    const { name, email, n, m } = req.body;
    const result = matchOfValues(m, n);
    
    const newRegister = new Register({ name, email, n, m, result });
    await newRegister.save();

    res.json(newRegister);
  },

  getRegister: async (req, res) => {
    const register = await Register.findById({ _id : req.params.id });
    res.json(register);
  },
}

module.exports = register;
