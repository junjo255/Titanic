const mongoose = require('mongoose');

const passengers = new mongoose.Schema({
    PassengerId: Number,
    Survived: Number,
    Pclass: Number,
    Name: String,
    Sex: String,
    Age: Number,
    SibSp: Number,
    Parch: Number,
    Ticket: String,
    Fare: Number,
    Cabin: String,
    Embarked: String
  })
  
  module.exports = mongoose.model('Passengers', passengers)
  