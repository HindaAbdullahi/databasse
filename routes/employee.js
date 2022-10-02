const {
    getEmpolyee,
    creatEmpolyee, 
    updateEmployee,
    deleteEmpolyee,
  } = require("../controllers/empolyee");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/employee", getEmpolyee);
  router.post("/employee", creatEmpolyee);
  router.put("/employee/:staffid", updateEmployee);
  router.delete("/employee/:staffid", deleteEmpolyee);
  
  module.exports = router;