const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
  exam_name: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  question_num: {
    type: Number,
    required: true,
  },
  ta_roll: {
    type: String,
    required: true,
  },
  std_roll: {
    type: String,
    required: true,
  },
  ta_comment: {
    type: String,
    required: false,
  },
  std_comment: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  }
});

const QueryModel = mongoose.model("queries", QuerySchema);
module.exports = QueryModel;