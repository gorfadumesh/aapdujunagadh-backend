var express = require("express");
var router = express.Router();

var sliderController = require("../controllers/slider");

router.get("/test", sliderController.test);

router.post("/add", sliderController.addSlide);

router.get("/getall", sliderController.getAllSlides);

router.post("/update", sliderController.updateSlide);

router.post("/delete", sliderController.deleteSlide);

module.exports = router;
