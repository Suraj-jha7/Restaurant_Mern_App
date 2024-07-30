import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "RESTAURANT",
}

  )
  .then( ()=> {
    console.log("connected to database successfully");
  })
  .catch( err => {
    console.log("error got while connecting to database.",err);
  })
}