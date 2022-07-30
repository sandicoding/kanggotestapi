//* Load packages
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

//* Load routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

//* Load others
import connectDB from './config/db.js'
import path from 'path'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json())

//* Load routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payments', paymentRoutes)

app.get('/', (req, res) => {
    res.send('API is running');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));