const Course = require("./../Model/Course")

exports.AddCourse = async(req,res,next)=>{
    const {title,description,video,subcourse} = req.body;

   const course = await Course.create({title,description,video,subcourse});
   res.status(201).json({
    message: "course added successfully",
    course
   })
}

exports.getAllCourse =async (req,res,next)=>{
    const courses = await Course.find()
    res.status(201).json({
        message: "courses fetched successfully",
        courses
       })
}

exports.getCourse =async (req,res,next)=>{
    const id = req.params.id;
    const newId = id.split('-').join(' ');
    console.log(newId)
    const course = await Course.find({title:newId})
    res.status(201).json({
        message: "course fetched successfully",
        course
       })
}

exports.DeleteCourse = (req,res,next)=>{
    console.log("delete clourse")
}

exports.UpdateCourse = (req,res,next)=>{
    console.log("update clourse")
}