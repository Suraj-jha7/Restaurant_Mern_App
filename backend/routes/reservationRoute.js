import express from 'express';
import {sendReservation} from "../controllers/reservation.js";
const router = express.Router();

// Define your routes here
router.post('/send', sendReservation);
router.get('/', )

export default router;