const { Router } = require("express");
const router = Router();
const { controllerPost } = require("../controller/controller");
router.post("/", controllerPost);

module.exports = router;
