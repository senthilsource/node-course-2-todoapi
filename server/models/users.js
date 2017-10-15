var {mongoose} = require("../db/mongoose");

var userModel = mongoose.model('user',{
  email:{
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {userModel};
