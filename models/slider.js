var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SliderSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model("Slider", SliderSchema);
