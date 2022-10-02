const mongoose = require('mongoose');

const apartmentScheme =  new mongoose.Schema({
    apartid: {
        type: Number,
        required: true,
        unique: true
    },
    apartname: {
        type: String,
      
    },
    floorid:
    {
       type:String,

    },
 phone:
    {
        type: Number,
        required: true
    },
},
    {
        timestamps: true}
           
    )
    
const apartment = mongoose.model('apartment', apartmentScheme);
module.exports = apartment;
