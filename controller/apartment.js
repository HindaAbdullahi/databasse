const Apartment= require("../model/apartment");
const Floor= require("../model/Floor");
const getApartment = (req, res) => {
    Apartment.find((err, apartments) => {
        if (err) {
            res.send(err);
        }
        res.json(apartments);
    });
};

const createApartment = async(req, res) => {
   
    const apartment = await Apartment.create({
        apartid: req.body.apartid,
        apartname: req.body.apartname,
        floorid: req.body.floorid,
        phone: req.body.phone,
      


    });

    apartment.save((err, apartment) => {
        if (err) {
            res.send(err);
        }
        res.json(apartment);
    });
};

const updateApartment = (req, res) => {


    Apartment.findOneAndUpdate(
        { _id: req.params.apartid },
        {
            $set: {
                apartid: req.body.apartid,
                apartname: req.body.apartname,
                floorid: req.body.floorid,
                units: req.body.units,
                phone: req.body.phone,
               
            },
        },
        { new: true },
        (err, Apartment) => {
            if (err) {
                res.send(err);
            } else res.json(Apartment);
        }
    );
};

const deleteApartment = (req, res) => {
    Apartment
    .deleteOne({ _id: req.params.apartid })
        .then(() => res.json({ message: "apartment Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getApartment,
    createApartment,
    updateApartment,
    deleteApartment,
};