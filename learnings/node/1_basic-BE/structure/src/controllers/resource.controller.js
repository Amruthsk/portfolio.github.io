// controllers/resource.controllers.js


// --- Product Controller Logic ---
const productGetByIdController = (req, res) => {
  const { id } = req.params;
  return res.json({ msg: `Product v1/v2 GET by ID: ${id}` });
};

const productCreateController = (req, res) => {
  return res.json({ msg: `Product CREATE: Resource Created` });
};

// --- Category Controller Logic ---
const categoryGetByIdController = (req, res) => {
  const { id } = req.params;
  return res.json({ msg: `Category v1/v2 GET by ID: ${id}` });
};

// --- User Controller Logic (v2 Only Resource) ---
const userGetByIdController = (req, res) => {
  const { id } = req.params;
  return res.json({ msg: `User v2 GET by ID: ${id}` });
};

module.exports = {
  productGetByIdController,
  productCreateController,
  categoryGetByIdController,
  userGetByIdController,
};
