import { fromPairs, get } from "lodash";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware for verifing if validated user exists in request.
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns 
 */
const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user");

  if (!user) {
    return res.sendStatus(403);
  }

  return next();
};

export default requireUser;
