//Fetch packages
const express = require("express");

//creating router variable using router from express package
const router = express.Router();

//Fetching candiesControllers
const candiesControllers = require("../controllers/candiesControllers");

//Fetching every function,
//get, get(id), post, put, delete
router.get("/", candiesControllers.getCandies);
router.get("/:id", candiesControllers.getById);
router.post("/", candiesControllers.postCandy);
router.put("/:id", candiesControllers.putCandy);
router.delete("/:id", candiesControllers.deleteCandy);

//maps and exports router
module.exports = router;
