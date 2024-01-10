const express=require("express");
const { createPhase, getAllPhases } = require("../ctrl/phaseCtrl");
const router=express.Router();


router.post("/create",createPhase);
router.get("/getAllPhases",getAllPhases);




module.exports=router;