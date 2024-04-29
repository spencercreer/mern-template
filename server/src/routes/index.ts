import { Router, Request, Response } from "express";


const routes = Router();

routes
  .route("/")
  .get(async (req: Request, res: Response) => {
    try {
      res.json("Hello from FreightScript");
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


export default routes;