import express from "express";
import StudentModel from "./models/studentSchema.js";

import CoachModel from "./models/coachSchema.js";
import sendMail from "./utils/sendMail.js";
import DenyMail from "./utils/DenyMail.js";
import coachSuccessMail from "./utils/coachSuccessMail.js";
const router = express.Router();

router.use(express.json());

router.post("/createUser", async (req, res) => {
  const { email, firstName } = req.body;
  const data = req.body;
  sendMail(email, firstName);
  

  try {
    const studentExists = await StudentModel.findOne({ email: email });

    if (studentExists) {
      res.send({ message: "user Exists" });
    } else {
      const Student = new StudentModel(data);
      await Student.save();
      res.send({ message: "Done", data: Student });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});


router.get("/getStudent",async(req,res)=>{
try {
  const data=await StudentModel.find();
  res.send({data})
} catch (error) {
  res.send(error)
}
})
router.get("/getCoach",async(req,res)=>{
try {
  const data=await CoachModel.find();
  res.send({data})
} catch (error) {
  res.send(error)
}
})

router.get("/sendemail", sendMail);
router.get("/denyemail", DenyMail);

router.post("/createCoach", async (req, res) => {
  const { email, firstName } = req.body;
  const data = req.body;
  coachSuccessMail(email,firstName)
  try {
    const coachExists = await CoachModel.findOne({ email: email });
    if (coachExists) {
      res.send({ message: "user Exists" });
    } else {
      const Coach = new CoachModel(data);
      await Coach.save();
      res.send({ message: "Done", data: Coach });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});

router.post("/coachlogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const coachExists = await CoachModel.findOne({ email: email });
    if (coachExists) {
      if(coachExists.password===password){
      res.send({ message: true });}
      else {
        res.send({message : false})
      }
    } 
    else{
      res.send({message:false})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});



router.post("/studentlogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const studentExists = await StudentModel.findOne({ email: email });
    if (studentExists) {
      if(studentExists.password===password){
      res.send({ message: true });}
      else {
        res.send({message : false})
      }
    } 
    else{
      res.send({message:"false in email"})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});



router.post("/availableTime/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    const newData = req.body;
   const checkUser=await CoachModel.findById(id)
   const updatedTime=checkUser.availableTime.push(newData)
   const updatedUser=await checkUser.save()
   res.send(updatedUser)
    
  } catch (err) {
    console.error(err);4
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
})
export default router;
