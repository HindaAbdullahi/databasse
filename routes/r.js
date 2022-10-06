
const {
    singleDepartment,
    getDepartment,
    updateDepartment,
    deleteDepartment,
  } = require("../controllers/department");
  
  const router = require("express").Router();
  
 
  router.get("/apartments", singleDepartment);
  router.post("/apartments", getDepartment);
  router.put("/apartments/:id",updateDepartment);
  router.delete("/apartments/:id",  deleteDepartment);
  
  module.exports = router;
