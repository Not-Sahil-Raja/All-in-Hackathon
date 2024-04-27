import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  learner: {
    type: Boolean,
    required: true,
  },
  profile: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/",
  },
});
