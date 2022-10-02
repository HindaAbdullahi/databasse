const mongoose = require('mongoose');

const complaintScheme = mongoose.Schema({
    queryid: {
        type: Number,
        required: true,
        unique: true
    },
    tenantid: {
        type: String,
        required: true,
       
    },
    
    apartid: {
        type: String,
        required: true,
       
    },
    staffid:
    {
        type: String,
        required: true,

    },

    description:
    {
        type: String,
        required: true
    }
    ,
    status:
    {
        type: Boolean,
        required: false
    },
   
        
        
},

{
    timestamps: true}
       
)

const complaint = mongoose.model('complaint', complaintScheme);
module.exports = complaint;
