require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const beneficiaryRoutes = require('./routes/beneficiaryRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', beneficiaryRoutes);

const PORT = process.env.PORT || 7979;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
