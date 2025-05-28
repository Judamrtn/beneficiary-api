require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const beneficiaryRoutes = require('./routes/beneficiaryRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Include auth routes

const app = express();

app.use(bodyParser.json());
app.use('/api/v1', beneficiaryRoutes);
app.use('/api/v1/auth', authRoutes); // ✅ Register the auth route here

const PORT = process.env.PORT || 7979;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
