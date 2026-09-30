import mongoose from "mongoose";
 const studentSchema = new mongoose.Schema(
	{
		name:{
			type:String,
			required:[true, "Name is required"],
			minlength :[3,"Name must be at least 3 characters"],
			maxlength :[30,"Name cannot exceed 30 characters"],
			trim :true,
		},
		email:{
			type :String,
			required:[true,"Email is required"],
			unique:true,
			trim:true,

		},
		phone :{
			type:String,
			required:[true,"Phone number is required"],

		},
		course:{
			type:String,
			required:[true,"Course is required"],
			minlength:[2,"Course must be at least 2 characters"],
			maxlength:[20,"Course cannot exceed 50 characters"],
			trim :true
		},
		age:{
			type:Number,
			required:[true,"Age is required"],
			min:[18,"Age must be at least 18"],
			max:[60,"Age cannot be greater than 60"],

		}
	},{
		timestamps:true,
	}
 )
 const student = mongoose.model("Student",studentSchema);
 export default student;
 