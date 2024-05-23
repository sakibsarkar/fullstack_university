import mongoose from "mongoose";
import app from "./app";
import Config from "./config";

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const uri = `mongodb+srv://${Config.dbUser}:${Config.dbPass}@cluster0.xbiw867.mongodb.net/${Config.dbName}`;
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`Mr. server is runing on port ${port}`);
    });
  } catch (error) {
    console.log("Failed connect server", error);
    process.exit(1);
  }
};

startServer();
