import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    unique:true
    // required: true
  },
  phone: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    // required: true
  },
  highestLevelPlayed: {
    type: String,
    // required: true
  },
  age: {
    type: Number,
    // required: true
  },
  dateOfBirth: {
    type: Date,
    // required: true
  },
  pastExperience: {
    type: String,
    // required: true
  },
  highestLevelPlayed: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  photo: {
    type: String,
    // required: true
  },
  achievements: {
    type: String,
    // required: true
  },
  roleOfPlay: {
    type: String,
    // required: true
  },
  roleOfCoaching: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    // required: true
  },
  password:{
    type: String,
    // required: true
  },
  description:{
    type: String,
    // required: true
  },
  amionline:{
    type: String,
    // required: true
  },
  gender:{
    type: String,
    // required: true
  },
  detailedDescription:{
    type: String,
    // required: true
  },
  fee:{
    type: Number,
    // required: true
  },  
  password:{
    type: String,
    // required: true
  },
  availableTime: {
    type: Array,
    default:[]
    // required: true
  }
});

const CoachModel = mongoose.model("verifiedCoach", coachSchema);

export default CoachModel;