const pool = require('../db');

// Register a new beneficiary
exports.registerBeneficiary = async (req, res) => {
  const {
    name, phone, email, dob,
    gender, physicalaAdress,
    identityNUmber, orgid, instituteName
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO beneficiaries 
        (name, phone, email, dob, gender, physical_address, identity_number, org_id, institute_name)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [name, phone, email, dob, gender, physicalaAdress, identityNUmber, orgid, instituteName]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get beneficiary by ID
exports.getBeneficiaryById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query(
      `SELECT * FROM beneficiaries WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Beneficiary not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all beneficiaries
exports.getAllBeneficiaries = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM beneficiaries`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Register sponsorship
exports.registerSponsorship = async (req, res) => {
  const { orgId, sponsorshipType, benId, date } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO sponsorships (org_id, sponsorship_type, ben_id, date)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [orgId, sponsorshipType, benId, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all sponsorships (Beneficiary status)
exports.getSponsorships = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.id, b.name, s.sponsorship_type, s.date
       FROM sponsorships s
       JOIN beneficiaries b ON s.ben_id = b.id`
    );
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// (Optional) Update beneficiary status
exports.updateStatus = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  try {
    const result = await pool.query(
      `UPDATE beneficiaries SET status = $1 WHERE id = $2 RETURNING *`,
      [status, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
