const register = {
  getRegister: (req, res) => {
    console.log('Get: Register');
    res.json({ data: {} });
  },

  createRegister: (req, res) => {
    console.log('Create a new register');
    res.json({ message: 'Create a new register' })
  }
}

module.exports = register;
