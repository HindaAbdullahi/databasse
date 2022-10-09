const mongoose = require('mongoose');

const complaintScheme = mongoose.Schema({
    tenant : {
        type: String,
        required: true,
      
    },
    subject: {
        type: String,
        required: true,
       
    },
    
    description: {
        type: String,
        required: false,
       
    },
   
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
