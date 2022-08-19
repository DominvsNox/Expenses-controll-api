const Category = require('../models/category_name')

module.exports.getAllCategories = async(req, res)=>{
    try{
        const [allCategories] = await Category.getAll()
        res.send(allCategories)
    }
    catch(err){
        return err
    }
}