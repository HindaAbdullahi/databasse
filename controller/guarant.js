const Guarant = require("../model/guarantor");

const getGuarant = (req, res) => {
    Guarant.find((err, guarants) => {
        if (err) {
            res.send(err);
        }
        res.json(guarants);
    });
};

const createGuarant = async (req, res) => {
    const guarant = await Guarant.create({
        guarantid: req.body.guarantid,
        fullname: req.body.fullname,
        gender: req.body.gender,
        tell: req.body.tell,
        address: req.body.address,
        title: req.body.title,

    });

    guarant.save((err, guarant) => {
        if (err) {
            res.send(err);
        }

    });
    res.json(guarant);
};

const updateGuarant = (req, res) => {
    Guarant.findOneAndUpdate(
        { _id: req.params.guarantid },
        
        {
            $set: {
                guarantid: req.body.guarantid,
                fullname: req.body.fullname,
                gender: req.body.gender,
                tell: req.body.tell,
                address: req.body.address,
                title: req.body.title,
            },
        },
        
        { new: true },
        (err, Guarant) => {
            if (err) {
                res.send(err);
            } else res.json(Guarant);
        }
    );
};

const deleteGuarant = (req, res) => {
    Guarant.deleteOne({ _id: req.params.guarantid })
        .then(() => res.json({ message: "Guarent Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getGuarant,
    createGuarant,
    updateGuarant,
    deleteGuarant,
};