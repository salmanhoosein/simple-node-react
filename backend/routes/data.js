const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data");


router.get("/select-dataset", dataController.getData);
// router.post("/test-data", dataController.postTestData);
router.get("/test-data", dataController.postTestData);

module.exports = router;
