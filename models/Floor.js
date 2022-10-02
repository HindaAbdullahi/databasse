const mongoose = require('mongoose');

const floorScheme = mongoose.Schema({
    floorid: {
        type: Number,
        required: true,
        unique: true
    },
    floorname: {
        type: String,
      
    },
   

    units:
    {
        type: String,
        required: true
    }
    ,
    primaryphone:
    {
        type: Number,
        required: true
    },
},
    {
        timestamps: true}
           
    )
    
const floor = mongoose.model('floor', floorScheme);
module.exports = floor;
