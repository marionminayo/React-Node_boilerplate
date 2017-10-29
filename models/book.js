const mongoose = require('mongoose');
const config = require('../configs/database');

//user schema
const BookSchema = mongoose.Schema({
    name: {
        type: String
    },
    published:{
        type: String
    },
    author:{
        type: String,
        required: true
    }
});

const Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
};

module.exports.getBookByName = function(name, callback){
    const query = {name:name};
    Book.findOne(query, callback);
};
module.exports.getBook = function(books, callback){
    books.find();
}

module.exports.addBook = function(newBook, callback){
    newBook.save(callback);
}


