const {
    getApartment,
    createApartment,
    updateApartment,
    deleteApartment,
  } = require("../controllers/apartment");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/apartments", getApartment);
  router.post("/apartments", createApartment);
  router.put("/apartments/:apartid", updateApartment);
  router.delete("/apartments/:apartid", deleteApartment);
  
  module.exports = router;