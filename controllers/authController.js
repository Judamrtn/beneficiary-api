const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Dummy hardcoded admin
const ADMIN = {
  email: 'evodemrtn@gmail.com',
  password: bcrypt.hashSync('123', 10), // hashed password
};

// Login to get token
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email || !bcrypt.compareSync(password, ADMIN.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: ADMIN.email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
