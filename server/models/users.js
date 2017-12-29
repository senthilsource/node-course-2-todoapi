var {mongoose} = require("../db/mongoose");
var validator = require("validator");
var jwt = require("jsonwebtoken");
var _=require("lodash");

var UserSchema = new mongoose.Schema({
  email:{
    type: String,
    require: true,
    minlength: 1,
    trim: true,
    unique:true,
    validate:{
      validator:validator.isEmail,
      message:'{VALUE} is not a valid email'
    }
  },
  password:{
    type:String,
    require:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

UserSchema.methods.toJSON = function (){
var user = this;
var userObject = user.toObject();

return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken =  function (){
  var user=this;
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(), access}, "123abc").toString();

  user.tokens.push({access, token});

  return user.save().then(()=>{
    return token;
  });
};

var userModel = mongoose.model('user',UserSchema);

module.exports = {userModel};
