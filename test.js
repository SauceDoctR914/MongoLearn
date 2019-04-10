const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("dev");
const { urlencoded, json } = require("body-parser");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    minlength: 10
  }
});

const Note = mongoose.model("note", noteschema);
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
appluse(json());

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

app.get("/note", async (req, res) => {
  const note = await Note.find({}).exec();
  res.status(200).json(notes);
});
app.post("/note", async (req, res) => {
  const note = await Note.create(noteToBeCreated);
  res.status(201).json(note.toJSON());
});
connect().then(async connection => {});
app.listen(5000).catch(e => console.error(e));
//const connect = () => {
//   return mongoose.connect(
//     "mongodb://localhost:27017/whatever",
//     { useNewUrlParser: true }
//   );
// };
//
// const student = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   info: {
//     school: {
//       type: String
//     },
//     shoeSize: {
//       type: Number
//     }
//   },
//   school: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "school"
//   }
// });
// const Student = mongoose.model("student", student);
//
// const school = new mongoose.Schema({
//   name: String,
//   openSince: Number,
//   students: Number,
//   isGreat: Boolean,
//   staff: [{ type: String }]
// });
//
// school.virtual("staffCount").get(function() {
//   return this.staff.length;
// });
//
// const School = mongoose.model("school", school);
// connect()
//   .then(async connection => {
//     const schoolConfig = await School.create({
//       name: "mlk elementry",
//       openSince: 2009,
//       students: 1000,
//       isGreat: true,
//       staff: ["e", "b", "g"]
//     });
//     const school2 = await School.create({
//       name: "Larry Middle School",
//       openSince: 1980,
//       students: 600,
//       isGreat: false,
//       town: mongoose.Schema.Types.ObjectId,
//       staff: ["a", "b", "c"]
//     });
// const schools = await School.create([schoolConfig, school2]);
//     const match2 = await School.find({ staff: { $in: ["b", "g"] } })
//       .sort("-openSince")
//       .limit(1)
//       .exec();
//     console.log(school2.staffCount);
//   })
//   .catch(e => console.error(e));
// const town = mongoose.schema({
//   name: String,
//   population: Number,
//   establish: Date
// });
//
// const Town = mongoose.model("town", town);
// const school = await School.findOneAndUpdate(
//   { name: "mlk elementry" },
//   { name: "mlk elementry" },
//   { upsert: true, new: true }
// ).exec();
// const student = await Student.create({
//   firstName: "Gavin",
//   school: school._id
// });
// const student2 = await Student.create({
//   firstName: "Luke",
//   school: school._id
// });
// const match = await Student.findById(student.id)
//   .populate()
//   .exec();
