const Order = require("../models/Order");

exports.newOrder = async (req, res) => {
  try {
    const newOrder = await new Order({
        ...req.body, user: req.user.id
      }).save();
   
    res.status(200).json({ message: `sucess ${newOrder}` });
  } catch (error) {
        return res.status(500).json({ message: error.message });
  }
};

exports.allOrders = async(req,res)=>{
    try {
        const userId = req.user.id
        const orders = await Order.find({user: userId})
        if (orders.length==0){
            return res.status(200).json({message: "No orders"})
        }
        
        res.status(200).json({ orders})

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.editOrder = async (req, res) => {
    try {
    const id = req.params.id;
    const order = await Order.findByIdAndUpdate(id,{ ...req.body, user: req.user.id});

      res.status(200).json({ message: `sucess ${order}` });
    } catch (error) {
          return res.status(500).json({ message: error.message });
    }
  };

  exports.deleteOrder = async (req, res) => {
    try {
    const id = req.params.id;
    const order = await Order.findByIdAndDelete(id,{ ...req.body, user: req.user.id});

      res.status(200).json({ message: `sucess ${order}` });
    } catch (error) {
          return res.status(500).json({ message: error.message });
    }
  };

  exports.triggerOrder = async (req,res)=>{
    try {
        let id = req.params.id
        const data = await Order.findByIdAndUpdate(id, {
            orderStatus: "succes",
    });
    res.json(data);
        
    } catch (error) {
        
    }
  }