const Commodity = require("../models/Commodity");
const User = require("../models/User");

exports.addCommodity = async (req, res) => {
  try {
    const addcommodity = await new Commodity({
        ...req.body, user: req.user.id
      }).save();

    console.log(req.user);
   
    res.status(200).json({ message: `sucess ${addcommodity}` });
  } catch (error) {
        return res.status(500).json({ message: error.message });
  }
};


exports.allCommodities = async(req,res)=>{
    try {
    
        const commodities = await Commodity.find()
        if (commodities.length==0){
            return res.status(200).json({message: "No commodities"})
        }

        res.status(200).json({ commodities})

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.editCommodity = async (req, res) => {
    try {
    const id = req.params.id;
    const commodity = await Commodity.findByIdAndUpdate(id,{ ...req.body, user: req.user.id});
      res.status(200).json({ message: `sucess ` });
    } catch (error) {
          return res.status(500).json({ message: error.message });
    }
  };

  exports.deleteCommodity = async (req, res) => {
    try {
    const id = req.params.id;
    const commodity = await Commodity.findByIdAndDelete(id,{ ...req.body, user: req.user.id});

      res.status(200).json({ message: `sucess ${commodity}` });
    } catch (error) {
          return res.status(500).json({ message: error.message });
    }
  };