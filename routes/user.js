const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/auth");
const { register, login, editProfile, addFund,withdrawFund,profile,forgotPassword,verifyOtp,allUsers, addGoldSpread,getSpread ,addSilverSpread,bidOrBuy,getBidOrBuy} = require("../controller/user");

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

router.post("/addGoldSpread", authUser, addGoldSpread);

router.post("/addSilverSpread", authUser, addSilverSpread);

router.get("/getSpread", getSpread);

router.post("/bidOrBuy", authUser, bidOrBuy);

router.get("/getBidOrBuy", getBidOrBuy);

module.exports = router;
