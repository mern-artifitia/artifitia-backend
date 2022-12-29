const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      text: true,
      unique: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "phone number is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    isAdmin: {
        type: Boolean,
        required : [true, "isAdmin is required"]
    },
    goldAskSpread:{
      type: Number,
    },
    goldBidSpread:{
      type: Number,
    },
    silverAskSpread:{
      type: Number,
    },
    silverBidSpread:{
      type: Number,
    },
    option:{
      type: String,
    },
    accountBalance: {
      type: Number,
      required: true,
      default: 0
    }, 
    mediaUrl :[{
      url: String
    }] ,
    transactions : [
      {
        transactionType :{
          type: String,
          required :[true, 'transaction type is required']
        },
        amount: {
          type: Number,
          required:[true, 'transaction amount is required']
        },
        
        createdAt: {type: Date, default: Date.now}
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
