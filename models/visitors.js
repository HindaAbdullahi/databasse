const mongoose = require('mongoose');

const visitorScheme = mongoose.Schema({
    visitorid: {
        type: Number,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
       
    },
    
    gender: {
        type: String,
        required: true,
       
    },
    tell:
    {
        type: Number,
        required: true,

    },

    address:
    {
        type: String,
        required: true
    }
    ,
    description:
    {
        type: String,
        required: true
    },
    tenantid:
    {
        type: String,
       required: true,
        },
        
        
},

{
    timestamps: true}
       
)

const visitor = mongoose.model('visitor', visitorScheme);
module.exports = visitor;
