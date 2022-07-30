import express from 'express'

const router = express.Router()
import { getProductById, getProducts, createNewProduct } from '../controllers/productController.js'

// @desc    fetch all product
// @route   Get
// @access  public

router.route('/').get(getProducts)

// @desc    create product
// @route   post
// @access  public

router.route('/create').post(createNewProduct)


// @desc    fetch sigle product
// @route   Get
// @access  public

router.route('/:id').get(getProductById)


export default router