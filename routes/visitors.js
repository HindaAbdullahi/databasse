const {
    getvisitors,
    createVisitors,
    updateVisitor,
    deleteVisitor,
  } = require("../controllers/visitors");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/visitors", getvisitors);
  router.post("/visitors", createVisitors);
  router.put("/visitors/:visitorid", updateVisitor);
  router.delete("/visitors/:visitorid", deleteVisitor);
  
  module.exports = router;