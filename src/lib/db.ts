"use server";

import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("🔴 [Missing MONGODB_URI]");

  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "arika",
    });

    isConnected = true;
    console.log("🚀 mongodb connected");
  } catch (error) {
    console.log("🔴 [DB CONNECTION FAILED]", error);
  }
};
