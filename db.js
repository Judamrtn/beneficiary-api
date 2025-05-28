require('dotenv').config();
const { Pool } = require('pg');
const authRoutes = require('./routes/authRoutes');
app.use('/api/v1/auth', authRoutes);

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false } // Required for Neon.tech with sslmode=require
});

module.exports = pool;
