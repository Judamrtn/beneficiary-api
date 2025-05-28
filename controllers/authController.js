const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Pre-hashed password for '123'
const ADMIN = {
  email: 'evodemrtn@gmail.com',
  password: '$2a$10$eS6p7m3nUeXq6TmjR5rJfOzG5tcSJo1.OwB3VEJ8ilGqT8Y9WeHy6', // hash of '123'
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
