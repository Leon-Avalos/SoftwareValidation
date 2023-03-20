const express = require("express");
const mongoose = require("mongoose");

const app = express();
const dbUri =
  "mongodb+srv://Eddy:14771456@softwarevalidationdb.zxvb1ng.mongodb.net/?retryWrites=true&w=majority";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

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
