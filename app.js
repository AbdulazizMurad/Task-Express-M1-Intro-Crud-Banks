const express = require("express");
const app = express(); // let the current app to be express.
const accountsRouter = require("./APIS/Accounts/accounts.routes");
const dotenv = require("dotenv");
const connectDB = require("./database");
dotenv.config();
connectDB();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/", accountsRouter);

// listen should be the code to listen to all previous code lines...
app.listen(PORT, () => {
  console.log("It's serving");
});
