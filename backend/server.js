import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      "Server listening on " + process.env.PORT + ", in " + process.env.NODE_ENV
    );
  });
});
