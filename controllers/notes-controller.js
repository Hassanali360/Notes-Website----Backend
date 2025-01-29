const Book = require('../Models/Book')




const getallBooks = async(req,res) => {




}


const singleBookbyid = async(req,res) => {

}

const addBook = async(req,res) => {
try{
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if(newBookFormData){
        res.status(201).json({
            success : true,
            message: 'book has been added',
            data: newlyCreatedBook
        })
    }

}catch(e){
    console.log(e);

}
    

};



const updateBooks = async(req,res) => {

}

const deleteBooks = async(req,res) => {

}

module.exports = { addBook, getallBooks, singleBookbyid, updateBooks, deleteBooks}