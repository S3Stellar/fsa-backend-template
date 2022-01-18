import express from "express";
import { routes } from "./routes";
import { db } from "./db";

const app = express();
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

// app.get("/hello", (req, res) => {
//   res.status(200).json({ name: "Naor Farag" });
// });

const start = async () => {
  await db.connect("mongodb://localhost:27017");

  await app.listen(8080);
  console.log(`server is running on port 8080`);
};

start();
