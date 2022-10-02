const mongoose = require('mongoose');

const GrantSchema = mongoose.Schema({
    guarantid: {
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
    title:
    {
        type: String,
        required: true,

        },
        
  
        
        
},{
    timestamps: true}
       
)

const guarant = mongoose.model('guarant', GrantSchema);
module.exports = guarant;
