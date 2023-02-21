import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await connect(process.env.MONGO_URL, {
      dbName: "react-native-ecom",
    });

    console.log("Server connected to database " + connection.host);
  } catch (error) {
    console.log("Some error occured", error);
    process.exit(1);
  }
};
