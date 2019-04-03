const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

const student = new mongoose.Schema({
  firstName: { type: String, required: true },
  info: {
    school: {
      type: String
    },
    shoeSize: {
      type: Number
    }
  }
});

const Student = mongoose.model("student", student);

connect()
  .then(async connection => {
    const student = await Student.create({ firstName: "Gavin" });
    // Student.find({firstName: "Gavin"})
  })
  .catch(e => console.error(e));
