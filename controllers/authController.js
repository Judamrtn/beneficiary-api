const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// ✅ Use correct hash of '123'
const ADMIN = {
  email: 'evodemrtn@gmail.com',
  password: '$2a$10$KqpnW8k8HdHfF6k/avm0fezU6svOpTIzEgsELJKFZKD8F1s6o7gVe'
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email) {
    return res.status(401).json({ error: 'Invalid email' });
  }

  const isMatch = bcrypt.compareSync(password, ADMIN.password);

  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign(
    { email: ADMIN.email, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};
