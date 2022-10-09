const Complaint = require("../model/complaints");

const getComplaints = (req, res) => {
    Complaint.find((err, complaints) => {
        if (err) {
            res.send(err);
        }
        res.json(complaints);
    });
};
const getComplaint = async (req, res) => {
    const { id } = req.params


    const complaints = await Complaint.findById(id)
    Complaint(complaints)

    res.status(200).json(complaints)
}
const createComplaint = async (req, res) => {
    const complaint = await Complaint.create({
        tenant:req.body.tenant,
        subject: req.body.subject,
        description: req.body.description,
        status: req.body.status
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
            ...req.body,
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
    getComplaints,
    getComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint,
};
