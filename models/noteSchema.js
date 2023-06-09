const mongoose=require('mongoose')
const AutoIncrement=require ('mongoose-sequence')(mongoose)

const Schema=mongoose.Schema

const noteSchema=new Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
},

title:{
    type:String,
    required:true
},
text:{
    type:String,
    default:"Employee"
},
completed:{
    type:Boolean,
    default:true
}
},

{
    timestamps:true
})


noteSchema.plugin(AutoIncrement,{
    inc_field:'ticket',
    id:'ticcketNums',
    start_seq:500
})




const Note = mongoose.model('Note',noteSchema)
module.exports=Note