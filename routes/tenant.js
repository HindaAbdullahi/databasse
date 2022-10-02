const {
    getTenant,
    createtenant,
    updatetenant,
    deleteTenant,
  } = require("../controllers/tenant");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let build a CRUD API!");
  });
  
  router.get("/tenants", getTenant);
  router.post("/tenants", createtenant);
  router.put("/tenants/:tenantid", updatetenant);
  router.delete("/tenants/:tenantid", deleteTenant);
  
  module.exports = router;