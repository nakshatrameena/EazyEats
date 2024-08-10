import mongoose from "mongoose";

export const  connectDB = async () =>{
   await mongoose.connect('mongodb+srv://mrbajpaye:NNwgB0WWN5fJ1xdv@cluster0.vbfalxt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
