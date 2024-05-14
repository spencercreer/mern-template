import express, { Request, Response } from "express";
import path from "path";
// import connection from "./db/connection";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = process.env.NODE_ENV === "production" ? 80 : 3000;

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")));
}

app.use(routes);

// connection.once("open", () => {
console.log("Intention database connection successful");
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// });
