const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data");


router.get("/select-dataset", dataController.getData);
router.get("/test-data", dataController.postTestData);

module.exports = router;
