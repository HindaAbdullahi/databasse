const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    staffid: {
        type: Number,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
       
    },
    gender:
    {
        type: String,
        required: true,

    },

    tell:
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
    type:
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
        
        
    apartid:
    {
        type: String,
        required: true,

        },
        
        
    status:
    {   type: Boolean,
        default: false

        },
        
        
        
        
        
},{
    timestamps: true}
       
)

const empolyee = mongoose.model('empolyee', empSchema);
module.exports = empolyee;
