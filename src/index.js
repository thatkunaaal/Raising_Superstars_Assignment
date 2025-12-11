const express = require("express");
const { ServerConfig, Logger } = require("./config");

const app = express();
const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

try {
  app.listen(ServerConfig.PORT, () => {
    console.log(`Server is up and running on port: ${ServerConfig.PORT}`);
  });
} catch (error) {
  Logger.error({
    message: "Something went wrong while starting the server",
    error: error.message,
  });
}
