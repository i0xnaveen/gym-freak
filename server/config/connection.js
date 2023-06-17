const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naveen62113:Ganapathy123@cluster0.1c0x0dx.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
