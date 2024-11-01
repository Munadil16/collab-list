import { connect } from "mongoose";

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URI as string, {
      dbName: "collab-list",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error("Error while connecting to database: ", err);
  }
};

export default connectDb;
