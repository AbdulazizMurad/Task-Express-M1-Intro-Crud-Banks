const accounts = require("../../accounts");
const AccountSchema = require("../../models/AccountSchema");
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await AccountSchema.find();
    return res.status(200).json({ data: accounts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const getAccountById = async (req, res) => {
  try {
    const { wantedId } = req.params;
    const accoundById = await AccountSchema.findById(wantedId);
    return res.status(200).json({ data: accoundById });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const addNewAccount = async (req, res) => {
  try {
    const accountInfo = req.body;
    const newAccount = await AccountSchema.create(accountInfo);
    return res.status(201).json({ data: newAccount });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { wantedId } = req.params;
    const deleted = await AccountSchema.findByIdAndDelete(wantedId); //dont forget await.
    return res.status(200).json({ data: deleted });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const updateAccount = async (req, res) => {
  try {
    const { wantedId } = req.params;
    const toUpdate = req.body;
    const updated = await AccountSchema.findByIdAndUpdate(wantedId, toUpdate);
    return res.status(200).json({ data: updated });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllAccounts,
  getAccountById,
  addNewAccount,
  deleteAccount,
  updateAccount,
};
//comment and previous codes------------------>

//  //async, dealing with bahrain database
//  try {
//   const accounts = await AccountSchema.find(); //await for data from database //find AccountSchema
//   return res.status(200).json({ data: accounts }); //account schema is on accounts so put it in data to be displayed
// } catch (error) {
//   console.log(error);
//   return res.status(500).json({ error: error }); // if error happened, json will show it from catch, and 500 status is server error
// }

// const addNewAccount = (req, res) => {
//   console.log(req.body);
//   let accountLength = accounts.length; //we have the accounts array length
//   let accountId = accounts[accountLength - 1].id + 1; // inside the accounts, at the last index[] length-1, take its id ".id" increase by 1.
//   const newAccount = {
//     id: accountId,
//     ...req.body,
//   };
//   accounts.push(newAccount);
//   res.status(201).json({
//     data: accounts,
//   });
// };

// const deleteAccount = (req, res) => {
//   const { wantedId } = req.params;
//   const deleted = accounts.filter((account) => {
//     if (account.id != wantedId) return true; //if id found, dont return it, and return every thing else.
//   });
//   // return res.status(200).json({ data: deleted });
//   if (!deleted) {
//     res.status(404).json({ error: "couldn't delete, id not found." });
//   } else return res.status(200).json({ data: deleted });
// };

// const updateAccount = (req, res) => {
//   const { wantedId } = req.params;
//   const updated = accounts.find((account) => {
//     if (account.id == wantedId) return true;
//   });

//   //let the updated funds = the funds i am recieving from the body request.
//   updated.funds = req.body.funds;
//   return res.status(200).json({ data: updated });
// };

// const getAccountById = (req, res) => {
//   const { wantedId } = req.params;
//   const accountById = accounts.find((account) => {
//     if (account.id == wantedId) return true;
//   });
//   return res.status(200).json({ data: accountById });
// };
// const getAccountByUsername = (req, res) => {
//   const { wantedUsername } = req.params;
//   const accountByUsername = accounts.filter((account) => {
//     if (account.username == wantedUsername) return true;
//   });
//   if (wantedUsername) {
//     res.status(200).json({ data: accountByUsername });
//   } else return res.status(404).json({ message: "account not found" });
// };
