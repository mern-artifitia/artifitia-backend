const express= require('express')
const router = express.Router()
const {authUser} = require('../middlewares/auth')

const {
    newOrder,
    allOrders,
    editOrder,
    deleteOrder,
    triggerOrder
  } = require("../controller/order");

router.post('/newOrder', authUser, newOrder)

router.get('/allOrders', authUser, allOrders)

router.put('/editOrder/:id', authUser, editOrder)

router.delete('/deleteOrder/:id', authUser, deleteOrder)

router.put('/triggerOrder/:id', authUser, triggerOrder)


module.exports=router