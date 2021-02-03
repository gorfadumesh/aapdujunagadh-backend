var Slider = require("../models/slider");

exports.addSlide = function async(req, res) {
  const { title, url, image } = req.body;
  var slider = new Slider({
    title,
    url,
    image,
  });

  slider.save().then((result) => {
    console.log(result);
    return res.status(200).send(result);
  });
};
exports.test = function async(req, res) {
  return res.status(200).send("Testing SLider");
};
exports.getAllSlides = function async(req, res) {
  const result = Slider.find().then((result) => {
    console.log(result);
    return res.status(200).send(result);
  });
};

exports.updateSlide = function async(req, res) {
  const { slideId, ...update } = req.body;
  const result = Slider.findOneAndUpdate({ _id: slideId }, update, {
    new: true,
  }).then((result) => {
    console.log(result);
    return res.status(200).send(result);
  });
};
exports.deleteSlide = function async(req, res) {
  const { slideId } = req.body;
  console.log(slideId);
  Slider.remove({ _id: slideId }).then((result) => {
    if (!result) {
      return res.status(400).send("No Slide Found");
    }
    return res.status(200).send(result);
  });
};
