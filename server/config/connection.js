const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naveen62113:Ganapathy123@cluster0.gj3aiaa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;