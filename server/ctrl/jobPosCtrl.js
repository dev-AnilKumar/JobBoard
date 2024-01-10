const jobModel = require("../models/jobModel");



const createJobPos=async (req,res)=>{
    try {
        const jobPos=await jobModel.create(req.body);
        res.status(201).redirect('https://job-board2.netlify.app/jobform');
    } catch (error) {
        console.log(error);
    }
}



module.exports=createJobPos;