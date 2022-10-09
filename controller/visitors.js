const Visitor = require("../model/visitors");

const getvisitors = (req, res) => {
  Visitor.find((err, visitors) => {
    if (err) {
      res.send(err);
    }
    res.json(visitors);
  });
};

const getVisitor = async (req, res) => {
  const { visitorid } = req.params


  const visitors = await Visitor.findById(visitorid)
  Visitor(visitors)

  res.status(200).json(visitors)
}
const createVisitors = async (req, res) => {
  const visitor = await Visitor.create({
    visitorid: req.body.visitorid,
    fullname: req.body.fullname,
    gender: req.body.gender,
    tell: req.body.tell,
    address: req.body.address,
    description: req.body.description,
    tenantid: req.body.tenantid,

  });

  visitor.save((err, visitor) => {
    if (err) {
      res.send(err);
    }

  });
  res.json(visitor);
};

const updateVisitor= (req, res) => {
  Unit.findOneAndUpdate(
    { _id: req.params.visitorid },
    {
      $set: {
        visitorid: req.body.visitorid,
        fullname: req.body.fullname,
        gender: req.body.gender,
        tell: req.body.tell,
        address: req.body.address,
        description: req.body.description,
        tenantid: req.body.tenantid,
      },
    },
    { new: true },
    (err, Visitor) => {
      if (err) {
        res.send(err);
      } else res.json(Visitor);
    }
  );
};

const deleteVisitor = (req, res) => {
  Visitor.deleteOne({ _id: req.params.visitorid })
    .then(() => res.json({ message: "visitor Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getvisitors,
    getVisitor,
  createVisitors,
  updateVisitor,
  deleteVisitor,
};
