const express = require("express");
const accounts = require("../../accounts");
const accountsRouter = express.Router();
const {
  getAllAccounts,
  addNewAccount,
  deleteAccount,
  updateAccount,
  getAccountById,
} = require("./accounts.controller");

//get all accounts:
accountsRouter.get("/accounts", getAllAccounts);
//get account by id:
accountsRouter.get("/accounts/:wantedId", getAccountById);
//get account by username
// accountsRouter.get("/accounts/username/:wantedUsername", getAccountByUsername); //change the route, dont let it as previous get.
//add new account:
accountsRouter.post("/accounts/create", addNewAccount);
//deleting (delete):
accountsRouter.delete("/accounts/:wantedId", deleteAccount);
//updating (put):
accountsRouter.put("/accounts/:wantedId", updateAccount);

module.exports = accountsRouter;
