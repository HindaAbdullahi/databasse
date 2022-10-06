const Apartment= require("../model/apartment");
const Floor= require("../model/Floor");
const { validate, Apartment } = require("../models/apartment");

const singleApartment= async(req, res) => {

    const apartment = await Apartment.find({});
    res.send(apartment);
  };
  const getApartments= async(req,res) => {   
    let apartment = await Apartment.findOne({ name: req.body.name });
    if (apartment) return res.status(400).send("apartment all ready registered");
    apartment = await Apartment.create({
      name: req.body.name,
      location: req.body.location,
      address: req.body.address,
    });
  
    res.send(apartment);
   }
 const updateApartment=  async(req, res) => {
      let apartment = await Apartment.findOne({ name: req.body.name });
      if (apartment)
        return res.status(400).send("apartment all ready registered");
      apartment = await Apartment.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          location: req.body.location,
          address: req.body.address,
        },
        { new: true }
      );
  
      res.send(apartment);
 }

const deleteApartment= async(req, res) => {

    const apartment = await Apartment.findByIdAndRemove(req.params.id);
  
    res.send(apartment);
}
  module.exports = {
    singleApartment,
    getApartments,
    updateApartment,
    deleteApartment,
};

