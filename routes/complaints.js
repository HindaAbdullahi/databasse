const {
    getComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint,
  } = require("../controllers/complaint");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/complaints", getComplaint);
  router.post("/complaints", createComplaint);
  router.put("/complaints/:queryid", updateComplaint);
  router.delete("/complaints/:queryid", deleteComplaint);
  
  module.exports = router;