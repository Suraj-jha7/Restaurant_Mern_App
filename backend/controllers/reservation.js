import ErrorHandler from "../error/error.js";

import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const {firstName, lastName, email, phone, date, time}  = req.body;
  if(!firstName || !lastName || !email || !phone || !time) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }
  
  try{
    console.log("attempting.. in database..");
    await Reservation.create({firstName, lastName, email, phone, date, time});
    console.log("data saved.. in database..");

    res.status(200).json({
      success: true,
      message: "Reservation send Successfully",
    })
  }
  catch(err){
    if(err.name === "ValidationError"){
      const validationError = Object.values(err.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationError.join(","), 480));
    }
    console.log("Different error",err);
  }
};