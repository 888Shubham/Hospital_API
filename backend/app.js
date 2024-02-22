import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import doctorRoute from './src/doctors/routes/doctors.routes.js';
import patientRoute from './src/patients/routes/patients.routes.js';
import cookieParser from 'cookie-parser';

const configPath = path.resolve("backend", ".env");
dotenv.config({path: configPath});

export const app = express();

// Parse incoming request bodies in JSON format
app.use(express.json());
// Parse cookies attached to the request
app.use(cookieParser())

//Configure routes
app.use("/doctors", doctorRoute);
app.use("", patientRoute);

