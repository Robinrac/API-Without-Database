//Fetch packages
const express = require("express");

//creating router variable using router from express package
const router = express.Router();

//Fetching candyControllers
const candyControllers = require("../controllers/candyControllers");

//Fetching every function,
//get, get(id), post, put, delete
router.get("/", candyControllers.getCandies);
router.get("/:id", candyControllers.getById);
router.post("/", candyControllers.postCandy);
router.put("/:id", candyControllers.putCandy);
router.delete("/:id", candyControllers.deleteCandy);

//maps and exports router
module.exports = router;
