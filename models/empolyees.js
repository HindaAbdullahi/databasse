const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
       
    },
    gender:
    {
        type: String,
        required: true,

    },
    email:
    {
        type: string,
        required: false,

    },
    tel:
    {
        type: Number,
        required: true,

    }
    ,
    address:
    {
        type: String,
        required: true,
    },
    department:
    {
        type: String,
        required: true,

        },
        
    salary:
    {
        type: Number,
        required: true,

        },
        
        
    createdBy:
    {
        type: String,
        required: true,

        },                
        
    status:
    {   type: Boolean,
        default: false

        },       
        
},{
    timestamps: true},
photo: {
       type: string, 
        required: false
 }
       
)

const empolyees = mongoose.model('empolyees', empSchema);
module.exports = empolyees;
