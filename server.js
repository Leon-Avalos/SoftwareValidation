const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");

const app = express();
const dbUri =
  "mongodb+srv://Eddy:14771456@softwarevalidationdb.zxvb1ng.mongodb.net/?retryWrites=true&w=majority";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(express.json());

(async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
})();

// Routes

//Get all students
app.get("/Student", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one student by id
app.get("/Student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new student
app.post("/Student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
  }
});

// Update a student by id
app.put("/Student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
    res.status(404).json({ message: "Student not found" });
  }
});

// Delete a student by id
app.delete("/Student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
