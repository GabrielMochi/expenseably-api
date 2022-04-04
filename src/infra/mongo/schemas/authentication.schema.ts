import { Authentication } from "@domain/authentication.domain";
import { Schema } from "mongoose";

export const authenticationSchema = new Schema<Authentication>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    _id: false,
    timestamps: false,
  },
);
