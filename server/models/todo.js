var {mongoose} = require("../db/mongoose");


var todoModel = mongoose.model('Todo', {
  text:{
      type: String,
      required : true,
      minLength: 5,
      trim : true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number
  }
});

module.exports = {todoModel};
