//menggunakan packgae mongoose
import mongoose from 'mongoose'

//bikin schema
const orderSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Product'
    },
    amount: {
        type: Number,
        required: true,
        default: 0

    },
    status: {
        type: String,
        required: true,
        default: 'pending'

    },
    isDelivered : {
        type : Boolean,
        required : true,
        default : false
    },
    deliveredAt : {
        type : Date
    }

}, {
    timestamps : true
})

//bikin varibale untuk menampung schema yang di buat
const Order = mongoose.model('Order', orderSchema);

//export variabel User untuk di gunakan 
export default Order;

