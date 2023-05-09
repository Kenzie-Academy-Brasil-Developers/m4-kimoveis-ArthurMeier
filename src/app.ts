import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { handleErrors } from "./errors";
import realEstateRoutes from "./routes/realEstate.routes";
import categoriesRoutes from "./routes/categories.routes";
import loginRoutes from "./routes/login.routes";
import schedulesRoutes from "./routes/schedules.routes";
import userRoutes from "./routes/users.routes";

const app: Application = express();

app.use(json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors);

export default app;
