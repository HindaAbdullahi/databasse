const {
    getFloor,
    createFloor,
    updateFloor,
    deleteFloor,
  } = require("../controllers/floor");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/floors", getFloor);
  router.post("/floors", createFloor);
  router.put("/floors/:floorid", updateFloor);
  router.delete("/floors/:floorid", deleteFloor);
  
  module.exports = router;