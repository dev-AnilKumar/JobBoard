const express=require("express");
const dbConnect = require("./config/dbConnect");
const app=express();
const cors=require("cors");
const phaseRoute=require("./routes/phaseRoute");
const jobRoute=require("./routes/jobPosRoute");
const dotenv=require("dotenv");
dotenv.config();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT=process.env.PORT || 5000;
app.use("/phase",phaseRoute);
app.use("/job",jobRoute);

app.listen(PORT,()=>{
console.log("server running")
})