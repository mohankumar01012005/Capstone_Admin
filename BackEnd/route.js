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


export default router;
