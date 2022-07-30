//menggunakan packgae mongoose
import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true
})

//bikin schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0

    },
    qty: {
        type: Number,
        required: true,
        default: 0

    }

}, {
    timestamps: true
})

//bikin varibale untuk menampung schema yang di buat
const Product = mongoose.model('Product', productSchema);

//export variabel Product untuk di gunakan 
export default Product;

