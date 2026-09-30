import student from "../Models/studentModels.js";



export const createStudent = async(req,res)=>{
try{

	const students =  await student.create(req.body);

	res.status(201).json({
		message:"Student created successfully",
		students,
	})
}catch(error){
	res.status(400).json({
		message :error.message,

	})
}
}
export const getStudents = async (req,res)=>{
	try{

		const students = await student.find();
		res.status(200).json({
			message:"student data ",
			students
		})
	}catch(error){
		res.status(500).json({
			messsage : error.message,

		})

	}
}


export const getStudent =async(req,res)=>{
	try{
const students =  await student.findById(req.params.id);
if(!students){
	res.status(404).json({
		message :"student not found",
	})
}

res.status(200).json({
	students,
})
	}catch(error){
res.status(404).json({
	messsage:"invalid student ID",
})
	}
}

export const deleteStudent = async(req,res)=>{
	try{
const students = await student.findByIdAndDelete(req.params.id);

if(!students){
	return res.status(404).json({
		message :"student not found"
	})
   }
res.status(200).json({
	message :"Student deleted successsfully",

})
	}catch(error){
res.status(404).json({
	message :"invalid student id",

})
	}
}


export const updateStudent = async(req,res)=>{
	try{
const students = await student.findByIdAndUpdate(req.params.id, req.body,
	{
		new :true,
		runValidators:true,
	}
)
if(!students){
	return res.status(404).json({
		message :"student not found",
	})
}
res.status(200).json({
	message:"student updated successfully",
	students
})

	}catch(error){
res.status(404).json({
	message :error.message,
})
	}
}