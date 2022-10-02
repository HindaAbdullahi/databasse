const Complaint = require("../model/complaints");

const getComplaint = (req, res) => {
    Complaint.find((err, complaints) => {
        if (err) {
            res.send(err);
        }
        res.json(complaints);
    });
};

const createComplaint = async (req, res) => {
    const complaint = await Complaint.create({
        queryid: req.body.queryid,
        tenantid: req.body.tenantid,
        apartid: req.body.apartid,
        staffid: req.body.staffid,
        description: req.body.description,
        status: req.body.status,

    });

    complaint.save((err, complaint) => {
        if (err) {
            res.send(err);
        }

    });
    res.json(complaint);
};

const updateComplaint = (req, res) => {
    Complaint.findOneAndUpdate(
        { _id: req.params.queryid },
        {
            $set: {
                queryid: req.body.queryid,
                tenantid: req.body.tenantid,
                apartid: req.body.apartid,
                staffid: req.body.staffid,
                description: req.body.description,
                status: req.body.status,
            },
        },
        { new: true },
        (err, Complaint) => {
            if (err) {
                res.send(err);
            } else res.json(Complaint);
        }
    );
};

const deleteComplaint = (req, res) => {
    Complaint.deleteOne({ _id: req.params.queryid })
        .then(() => res.json({ message: "complaints Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint,
};