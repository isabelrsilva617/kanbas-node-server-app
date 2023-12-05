import "dotenv/config";

import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Database/courses/routes.js";
import ModuleRoutes from "./Database/modules/routes.js";
import UserRoutes from "./users/routes.js";
import session from "express-session";

import cors from "cors";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://silvai:governador100@cluster0.mne8riy.mongodb.net/?retryWrites=true&w=majority" || "mongodb://localhost:27017/kanbas");

const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
   );
   const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
     
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);

