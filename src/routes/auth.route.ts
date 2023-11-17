import express  from "express";
import {signup} from '../controllers/auth.controller'
const router = express.Router();

// router.post("/signup", (req, res)=>{
//             console.log(req.body);
// });
router.post("/signup", signup )
export default router;