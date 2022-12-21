const express = require("express");
const {
  addCommodity,
  allCommodities,
  editCommodity,
  deleteCommodity,
  addSpread
} = require("../controller/commodity");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/addCommodity", authUser, addCommodity);

router.get("/allCommodities",  allCommodities);

router.put("/editCommodity/:id", authUser, editCommodity);

router.delete("/deleteCommodity/:id", authUser, deleteCommodity);

module.exports = router;