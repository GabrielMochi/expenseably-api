import Boom from "boom";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import type { NextFunction, Request, Response } from "express";

export const validation =
  <T>(dataType: ClassConstructor<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const data = plainToInstance(dataType, req.body || {});

    validate(data as Record<string, unknown>).then((errors) => {
      if (errors.length > 0) {
        const message = errors.map(({ constraints, property }) => ({
          [property]: Object.values(constraints),
        }));

        next(Boom.badRequest(JSON.stringify(message)));
        return;
      }

      next();
    });
  };
