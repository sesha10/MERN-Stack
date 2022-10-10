const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/User");

const cors = require("cors");
const QueryModel = require("./models/Query");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://puthucodeseshadri:Badminto@cluster0.zlpmogg.mongodb.net/?retryWrites=true&w=majority"
);

// All get queries below
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});



// All post queries below
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.post("/student/addQuery", async (req, res) => {
    const query = req.body;
    const newQuery = new QueryModel(query);
    await newQuery.save();

    res.json(query);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});