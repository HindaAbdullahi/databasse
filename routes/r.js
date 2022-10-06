
const {
    singleDepartment,
    getDepartment,
    updateDepartment,
    deleteDepartment,
  } = require("../controllers/department");
  
  const router = require("express").Router();
  
 
  router.get("/apartments", singleDepartment);
  router.post("/apartments", getDepartment);
  router.put("/apartments/:apartid",updateDepartment);
  router.delete("/apartments/:apartid",  deleteDepartment);
  
  module.exports = router;
