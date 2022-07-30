//menggunakan packgae mongoose
import mongoose from 'mongoose'

//bikin schema
const paymentSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    
    amount: {
        type: Number,
        required: true,
        default: 0

    },
    status: {
        type: String,
        required: true,
        default: 'paid'

    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }

}, {
    timestamps: true
})

//bikin varibale untuk menampung schema yang di buat
const Payment = mongoose.model('Payment', paymentSchema);

//export variabel User untuk di gunakan 
export default Payment;

