const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/auth");
const imageUpload = require("../middlewares/imageUpload");
const { register, login, editProfile, addFund,withdrawFund,profile,forgotPassword,verifyOtp,allUsers, addAskGoldSpread,addBidGoldSpread,getSpread ,addAskSilverSpread,addBidSilverSpread,bidOrBuy,getBidOrBuy,mediaImage,updatePassword,uploadImages,storeImageUrl,imageList} = require("../controller/user");

router.post("/register", register);

router.post("/login", login);

router.put("/editProfile/:id",authUser, editProfile);

router.post("/forgotPassword", forgotPassword);

router.post("/verifyOtp", verifyOtp);

router.put("/updatePassword", updatePassword);

router.post("/addFund/:id",authUser, addFund);

router.post("/withdrawFund/:id",authUser, withdrawFund);

router.get("/profile/:id",authUser, profile);

router.get("/allUsers",authUser, allUsers);

router.post("/addAskGoldSpread", authUser, addAskGoldSpread);

router.post("/addAskSilverSpread", authUser, addAskSilverSpread);

router.post("/addBidGoldSpread", authUser, addBidGoldSpread);

router.post("/addBidSilverSpread", authUser, addBidSilverSpread);

router.get("/getSpread", getSpread);

router.post("/bidOrBuy", authUser, bidOrBuy);

router.get("/getBidOrBuy", getBidOrBuy);

router.post("/mediaImage",authUser, mediaImage);

router.post("/uploadImages", authUser, imageUpload, uploadImages);

router.post("/storeImageUrl",authUser, storeImageUrl)

router.get("/imageList",authUser, imageList)

module.exports = router;
