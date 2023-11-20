import "dotenv/config";

import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Database/courses/routes.js";
import ModuleRoutes from "./Database/modules/routes.js";

import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
ModuleRoutes(app);

CourseRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);

