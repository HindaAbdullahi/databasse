const mongoose = require('mongoose');

const tenantSchema = mongoose.Schema({
    tenantid: {
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
    guarantid:
    {
        type: String,
        required: true,

        },
        
    staffid:
    {
        type: String,
        required: true,

        },
        
        
},{
    timestamps: true}
       
)

const tenants = mongoose.model('tenants', tenantSchema);
module.exports = tenants;
