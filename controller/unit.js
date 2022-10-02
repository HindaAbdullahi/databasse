const Unit = require("../model/Units");

const getUnits = (req, res) => {
  Unit.find((err, units) => {
    if (err) {
      res.send(err);
    }
    res.json(units);
  });
};

const createUnit = async(req, res) => {
  const unit =  await Unit.create ({
    unitid: req.body.unitid,
    floor: req.body.floor,
    roomsCount: req.body. roomsCount,
    kitchenCount:req.body.kitchenCount,
    toiletCount:req.body.toiletCount,
    status:req.body.Status,
    
  });

  // unit.save((err, unit) => {
  //   if (err) {
  //     res.send(err);
  //   }
  
  // });
  res.json(unit);
};

const updateUnit = (req, res) => {
  Unit.findOneAndUpdate(
    { _id: req.params.unitid },
    {
      $set: {
        unitid: req.body.unitid,
        floor: req.body.floor,
    roomsCount: req.body. roomsCount,
    kitchenCount:req.body.kitchenCount,
    toiletCount:req.body.toiletCount,
    status:req.body.status,
      },
    },
    { new: true },
    (err, Unit) => {
      if (err) {
        res.send(err);
      } else res.json(Unit);
    }
  );
};

const deleteUnit = (req, res) => {
  Unit.deleteOne({ _id: req.params.unitid })
    .then(() => res.json({ message: "unit Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getUnits,
  createUnit,
  updateUnit,
  deleteUnit,
};