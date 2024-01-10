const express=require("express");
const createJobPos = require("../ctrl/jobPosCtrl");
const router=express.Router();


router.post("/create",createJobPos);




module.exports=router;