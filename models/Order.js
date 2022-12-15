const mongoose= require('mongoose')
const { ObjectId } = mongoose.Schema;
const orderSchema =mongoose.Schema({
    commodity: {
        type: String,
        required: [true, "Commodity name is required"],
        trim: true,
        text: true,
      },
      price: {
        type: Number,
        required: [true, "price is required"],
      },
      lotSize: {
        type: Number,
        required: [true, "Lot size is required"],
      },
      stopLoss: {
        type: Number,
      },
      target: {
        type: Number,
      }, 
      typeOfOrder: {
        type: String,
        required: [true, "Type order is required"]
      } ,
      orderStatus: {
        type: String,
        default: "pending"
      },

    user: {
        type: ObjectId,
        ref: "User",
        required: true,
      },  
},
{
    timestamps: true,
  }
)

module.exports = mongoose.model('Order',orderSchema)