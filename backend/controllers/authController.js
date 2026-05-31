const bcrypt = require("bcrypt");
const User =
  require("../models/User");
let users = [];

const signup =
async (req,res) => {

  const {
    username,
    password
  } = req.body;

  try {

    const existingUser =
      await User.findOne({
        username
      });

    if(existingUser){

      return res
        .status(400)
        .json({
          message:
            "User already exists"
        });

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await User.create({

      username,

      password:
        hashedPassword

    });

    res.json({

      message:
        "User created"

    });

  }

  catch(error){

    console.log(error);

    res.status(500)
      .json({
        message:
          "Server error"
      });

  }

};

const jwt=require("jsonwebtoken");

const login = async (req, res) => {

  const { username, password } = req.body;

  const user =
    await User.findOne({
      username
    });

  if(!user){

    return res.status(404).json({
      message: "User not found"
    });

  }

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if(!isMatch){

    return res.status(401).json({
      message: "Invalid password"
    });

  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    "secretkey",
    {
      expiresIn: "1h"
    }
  );

  res.json({
    token
  });

};
module.exports={
    login,
    signup
}