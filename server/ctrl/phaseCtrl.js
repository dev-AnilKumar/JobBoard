const phaseModel = require("../models/phaseModel")



const createPhase=async (req,res)=>{
    try {
        const phase=await phaseModel.create(req.body);
        res.status(201).redirect('https://job-board2.netlify.app/phaseform');
    } catch (error) {
        console.log(error);
    }
}

const getAllPhases=async (req,res)=>{
    try {
        const phases=await phaseModel.find();
        res.status(200).send(phases);
    } catch (error) {
        console.log(error);
    }
}


module.exports={createPhase, getAllPhases}