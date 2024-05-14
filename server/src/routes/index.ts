import { Router, Request, Response } from "express";
import path from "path";

const routes = Router();

routes.route("/api").get(async (req: Request, res: Response) => {
  try {
    res.json("Hello from FreightScript");
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

routes
  .route("/health")
  .get((req: Request, res: Response) =>
    res.status(200).send({ status: "Healthy" })
  );

// serve up react front-end in production
routes.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

export default routes;
