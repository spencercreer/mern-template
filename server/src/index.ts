import express, { Request, Response } from "express";
// import connection from "./db/connection";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = 3009;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(routes);

// connection.once("open", () => {
  console.log("Intention database connection successful");
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
// });
