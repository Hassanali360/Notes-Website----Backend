const express = require('express')
const {getallBooks, addBook, singleBookbyid, updateBooks, deleteBooks} = require('../controllers/book-controller')
const router = express.Router()




// all the routes related to books


router.get('/get', getallBooks )
router.get('/get/:id', singleBookbyid )
router.post('/add',   addBook)
router.put('/update/:id', updateBooks)
router.delete('/delete/:id')


module.exports = router;
