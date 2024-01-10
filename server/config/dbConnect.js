const mongoose=require("mongoose")


const dbConnect = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGODB_URL);
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/codepth_project");
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database error");
        console.log(error);
    }
}

module.exports = dbConnect;

