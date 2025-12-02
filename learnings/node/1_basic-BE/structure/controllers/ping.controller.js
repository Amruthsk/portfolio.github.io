// controllers/ping.controller.js
function homePingController(req, res) {
  return res.json({ msg: "OK: Welcome home" }); 
} 
module.exports = homePingController;
