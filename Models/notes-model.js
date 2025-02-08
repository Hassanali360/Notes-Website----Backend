const mongoose = require ('mongoose')


const notesSchemas = mongoose.Schema({
    title: {require:true,type:String, },
    content:{require:true,type:String},
    tags:{type:[String],default:[]},
    isPinned:{type:Boolean, default: false},
    userId : {type:String,require:true},
    createdOn:{type:Date, default: new Date().getTime()}
})


module.exports = mongoose.model("Notes", notesSchemas);