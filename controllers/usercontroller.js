const User = require("../Models/userModel.js")


const Signup = async (req,res) => {
try{
    const {fullname,email,password} = req.body;
   //validation
   if(!fullname || !email || !password){
    return res.status(400).json({message: "ALL FIELDS ARE REQUIRED"});
   }

   const userExist = await User.findOne({email});
   if(userExist){
    return res.status(400).json({message: "User Already Exist on this Email Address"})
   }

   const createUser = new User({
    fullname,
    email,
    password
   })

   await createUser.save();
res.status(201).json({message: "YOU SIGNED UP SUCCESSFULLY"})

}catch(error){
    console.log("Error:" ,error.message);
    res.status(500).json({message:"Internal Server Error"})
}
};

const userLogin = async (req,res) => {
    try{
          const {email,password} = req.body;

          if(!email || !password){
            return res.status(400).json({message:"ALL FIELDS ARE REQUIRED "})
          }
          const user = await User.findOne({email});
          if(!user){
            return res.status(400).json({message:"invalid email or password"});
          }



    }catch(error){
        console.log("Error:" ,error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}