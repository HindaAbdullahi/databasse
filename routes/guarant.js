const {
    getGuarant,
    createGuarant,
    updateGuarant,
    deleteGuarant,
  } = require("../controllers/guarant");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/guarants", getGuarant);
  router.post("/guarants", createGuarant);
  router.put("/guarants/:guarantid", updateGuarant);
  router.delete("/guarants/:guarantid", deleteGuarant);
  
  module.exports = router;