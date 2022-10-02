const mongoose = require('mongoose');

const unitsScheme = mongoose.Schema({
    unitid: {
        type: Number,
        required: true,
        unique: true
    },
    floor: {
        type: String,
        required: true,
       
    },
    roomsCount:
    {
        type: Number,
        required: true,

    },

    kitchenCount:
    {
        type: Number,
        // required: true
    }
    ,
    toiletCount:
    {
        type: Number,
        // required: true
    },
    status:
    {
        type: Boolean,
        default: false
        },
        
        
},

{
    timestamps: true}
       
)

const units = mongoose.model('units', unitsScheme);
module.exports = units;
