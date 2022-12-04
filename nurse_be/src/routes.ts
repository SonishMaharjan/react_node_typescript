import express, { Express, Request, Response, Router } from "express";

import { requireUser } from "./middleware";

import userRoute from "./routes/userRoute";
import sessionRoute from "./routes/sessionRoute";
import nurseRoute from "./routes/nurseRoute";

// export default function (app: Express) {
//   app.get("/healthcheck", (req: Request, res: Response) => {
//     res.sendStatus(200);
//   });

//

//   //Create a nurse
//   app.post(
//     "/api/nurse",
//     [requireUser, validateRequest(createNurseSchema)],
//     createNurseHandler
//   );

//   // Update nurse
//   app.put(
//     "/api/nurse/:nurseId",
//     [requireUser, validateRequest(updateNurseSchema)],
//     updateNurseHandler
//   );

//   // Get all nurses
//   app.get("/api/nurse", [requireUser], getAllNurseHandler);

//   //Get a nurse
//   app.get("/api/nurse/:nurseId", [requireUser], getNurseHandler);

//   // Delete nurse
//   app.delete(
//     "/api/nurse/:nurseId",
//     [requireUser, validateRequest(deleteNurseSchema)],
//     deleteNurseHandler
//   );
// }

const routes: Router = express.Router();

routes.use("/users", userRoute);
routes.use("/sessions", sessionRoute);
routes.use("/nurses", requireUser, nurseRoute);

export default routes;
