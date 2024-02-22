import express  from "express";
import DoctorController from "../controllers/doctors.controller.js";

const doctorController = new DoctorController();

const doctorRoute = express.Router();

doctorRoute.post('/register', (req,res, next)=>{
    doctorController.register(req, res, next);
});

doctorRoute.post('/login', (req, res)=>{
    doctorController.login(req, res);
})

doctorRoute.post('/logout', (req, res)=>{
    doctorController.logout(req, res);
})

export default doctorRoute;