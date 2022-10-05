const Floor= require("../model/Floor");

const getFloors = (req, res) => {
    Floor.find((err, floors) => {
        if (err) {
            res.send(err);
        }
        res.json(floors);
    });
};
const getFloor = async (req, res) => {
    const { floorid } = req.params


    const floors = await Floor.findById(floorid)
    Tenant(floors)

    res.status(200).json(floors)
}
const createFloor = async(req, res) => {
    const floor = await Floor.create({
        floorid: req.body.floorid,
        floorname: req.body.floorname,
        apartment: req.body.apartment,
        units: req.body.units,
        primaryphone: req.body.primaryphone,


    });

    floor.save((err, floor) => {
        if (err) {
            res.send(err);
        }
        res.json(floor);
    });
};

const updateFloor = (req, res) => {
    Floor.findOneAndUpdate(
        { _id: req.params.floorid },
        {
            $set: {
                floorid: req.body.floorid,
                floorname: req.body.floorname,
                apartment: req.body.apartment,
                units: req.body.units,
                primaryphone: req.body.primaryphone,
            },
        },
        { new: true },
        (err, Floor) => {
            if (err) {
                res.send(err);
            } else res.json(Floor);
        }
    );
};

const deleteFloor = (req, res) => {
    Floor.deleteOne({ _id: req.params.floorid })
        .then(() => res.json({ message: "floor Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getFloor,
    getFloors,
    createFloor,
    updateFloor,
    deleteFloor,
};
