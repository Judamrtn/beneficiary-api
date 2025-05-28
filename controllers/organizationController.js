const pool = require('../db');

// Register organization
exports.registerOrganization = async (req, res) => {
  const { org_id, name } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO organizations (org_id, name)
       VALUES ($1, $2) RETURNING *`,
      [org_id, name]
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
