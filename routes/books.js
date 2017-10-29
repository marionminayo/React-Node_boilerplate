const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const config = require('../configs/database');
const mongojs = require('mongojs');

//register route
router.post('/', (req, res, next)=>{
    //creating new user
    let newBook = new Book({
        name: req.body.name,
        published: req.body.published,
        author: req.body.author
    });

    Book.addBook(newBook, (err, books)=>{
        if(err){
            res.json({success:false, msg:'Filed registration'});
            console.log(err);
        }else{
            res.json({success:true, msg:'Registration successful'});
        };
    });
});
//get all
router.get('/', (req, res, next)=>{
    Book.find(function(err, books){
        if(err){
            res.send(err);
        }res.json(books)
    })
});
//get one
router.get('/:id',(req, res, next)=>{
    Book.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }res.json(books);
    })
});
//delete one
router.delete('/:id', function(req, res, next){
    Book.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }res.json(books)
    })
});
//update
router.put('/:id', function(req,res,next){
    var books = req.body;
    var upBook = {};

    if(books.name){
        upBook.name = books.name;
    }
    if(books.published){
        upBook.published = books.published;
    }
    if(books.author){
        upBook.author = books.author;
    }

    if (!upBook){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }else {
        Book.update({_id: mongojs.ObjectId(req.params.id)}, upBook, {}, function(err,books){
            if(err){
                res.send(err);
            }
            res.json(books);
        });
    }
});


          


module.exports = router;