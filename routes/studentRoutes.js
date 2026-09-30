import { getStudents , createStudent, deleteStudent, updateStudent,getStudent } from "../Controllers/studentController.js";
import express from "express";

const router = express.Router();

router.post("/",createStudent);
router.get("/",getStudents);
router.delete("/:id",deleteStudent)
router.put("/:id",updateStudent);
router.get("/:id",getStudent);


export default router;
