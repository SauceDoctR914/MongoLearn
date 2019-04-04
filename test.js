const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/whatever",
    { useNewUrlParser: true }
  );
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
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "school"
  }
});
const Student = mongoose.model("student", student);

const school = new mongoose.Schema({
  name: String,
  openSince: Number,
  students: Number,
  isGreat: Boolean,
  staff: [{ type: String }]
});

const School = mongoose.model("school", school);
connect()
  .then(async connection => {
    const schoolConfig = {
      name: "mlk elementry",
      openSince: 2009,
      students: 1000,
      isGreat: true,
      staff: ["e", "b", "g"]
    };
    const school2 = {
      name: "Larry Middle School",
      openSince: 1980,
      students: 600,
      isGreat: false,
      staff: ["a", "b", "c"]
    };
    const schools = await School.create([schoolConfig, school2]);
    const match2 = await School.find({ $in: { staff: ["b", "g"] } })
      .sort("-openSince")
      .limit(2)
      .exec();
    console.log(match2);
  })
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

  .catch(e => console.error(e));
