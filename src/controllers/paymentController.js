import Payment from "../models/payModel.js";
import expressHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private

const payment = expressHandler(async (req, res) => {
    const {
        orderId,
        amount,
    } = req.body;

    if (!orderId) {
        res.status(404)
        throw new Error('No Order')
    } else {
        const payment = new Payment({
            orderId,
            amount,
        });

        const createPayment = await Payment.create(payment)

        if(!createPayment)
        {
            res.status(400)
            throw new Error('Payment not created')
        }


        const updateOrder = await Order.findByIdAndUpdate({ _id : orderId},{ status : 'paid'})
        
        if(!updateOrder)
        {
            res.status(400)
            throw new Error('Netwok Error')
        }

        res.status(201).json(createPayment)

    }
});


export {
    payment
}