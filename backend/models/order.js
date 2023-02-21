import { Schema, model } from "mongoose";

const schema = new Schema({});

export const Order = model("Order", schema);
