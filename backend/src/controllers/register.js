const Register = require('../models/register');

const register = {
  getRegister: async (req, res) => {
    const register = await Register.findById({ _id : req.params.id });

    console.log(`Get: ${register}`);
    res.json({ data: register });
  },

  createRegister: async (req, res) => {
    const { name, email, n, m, result } = req.body;

    const newRegister = new Register({ name, email, n, m, result });
    await newRegister.save();

    res.json({ data: newRegister });
  }
}

module.exports = register;
