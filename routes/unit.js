const {
    getUnits,
    createUnit,
    updateUnit,
    deleteUnit,
  } = require("../controllers/unit");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/units", getUnits);
  router.post("/units", createUnit);
  router.put("/units/:unitid", updateUnit);
  router.delete("/units/:unitid", deleteUnit);
  
  module.exports = router;