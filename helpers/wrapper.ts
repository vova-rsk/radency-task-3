import { Request, Response, NextFunction } from "express";

type ServiceFn = (x: Request, y: Response, z?: NextFunction) => Promise<void>;

const wrapper = (service:ServiceFn) => {
  return async (req:Request, res:Response, next:NextFunction) => {
    try {
      await service(req, res, next);
    } catch (err) {
      next(err)
    }
  };
};

export default wrapper
