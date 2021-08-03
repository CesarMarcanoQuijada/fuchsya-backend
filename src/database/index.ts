import mongoose from "mongoose";

const db: any= process.env["MONGO_DB"];

export default async function initialize() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
}
