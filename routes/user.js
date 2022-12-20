const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/auth");
const { register, login, editProfile, addFund,withdrawFund,profile,forgotPassword,verifyOtp,allUsers } = require("../controller/user");

router.post("/register", register);

router.post("/login", login);

router.put("/editProfile/:id",authUser, editProfile);

router.post("/forgotPassword", forgotPassword);

router.post("/verifyOtp", verifyOtp);

// router.put("/updatePassword", updatePassword);

router.post("/addFund/:id",authUser, addFund);

router.post("/withdrawFund/:id",authUser, withdrawFund);

router.get("/profile/:id",authUser, profile);

router.get("/allUsers",authUser, allUsers);

module.exports = router;
