import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("DATABASE.dbUri") as string;

  //   mongoose.connect(
  //     mongoAtlasUri,
  //     { useNewUrlParser: true, useUnifiedTopology: true },
  //     () => console.log(" Mongoose is connected")
  //   );

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      log.info("Database connected successfully");
    })
    .catch((error) => {
      log.error("db connection error", error);
      process.exit(1);
    });
}

export default connect;
