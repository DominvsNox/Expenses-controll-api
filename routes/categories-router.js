const express = require('express')
const categoriesRouter = express.Router()
const categoriesController = require('../controllers/category_name_controller')

categoriesRouter.get('/', categoriesController.getAllCategories)

module.exports = categoriesRouter