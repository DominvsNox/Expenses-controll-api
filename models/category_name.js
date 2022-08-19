const db = require('../util/connection')

module.exports = class CategoryName{
    constructor(id, cName){
        this.id=id
        this.cName = cName
    }

    static getAll(){
        return db.execute('SELECT * FROM category_name')
    }
}