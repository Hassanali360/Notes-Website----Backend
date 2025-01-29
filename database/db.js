const mongoose = require('mongoose')



const connectDatabase = async () => {
try{
    await mongoose.connect(
"mongodb+srv://hassanmunir083:1234@01.suoqd.mongodb.net/"
    );
    console.log("databse connection successful")
} catch(error){
    console.log("connection failed", error);
    process.exit(1);
}



}




    module.exports = connectDatabase