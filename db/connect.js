// #############
// connect to mongodb using mongoose
// #############
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = (url) => {
  return mongoose.connect(url, {useNewUrlParser: true});
}

module.exports = connect ;



