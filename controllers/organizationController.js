const pool = require('../db');

// Register organization
exports.registerOrganization = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO organizations (name, email, phone, address)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, phone, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all organizations
exports.getAllOrganizations = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM organizations`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
