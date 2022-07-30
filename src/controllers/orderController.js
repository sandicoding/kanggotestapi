import Order from "../models/orderModel.js";
import expressHandler from "express-async-handler";

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private

const addOrderItems = expressHandler(async (req, res) => {
    const {
        productId,
        amount,
    } = req.body;

    if (!productId) {
        res.status(404)
        throw new Error('No Order Items')
    } else {
        const order = new Order({
            userId: req.user._id,
            productId,
            amount,

        });

        const createOrder = await order.save()

        if(!createOrder){
            res.status(400)
            throw new Error('Order not created')
        }

        res.status(201).json(createOrder)
    }
});

const getOrderItems = expressHandler(async (req, res) => {
    const order = await Order.find({ userId: req.user._id })

    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }

    res.status(200).json(order)
})


export {
    addOrderItems,
    getOrderItems
}