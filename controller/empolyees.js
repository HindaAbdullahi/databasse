const Emp = require("../model/empolyee");

const getEmpolyees = (req, res) => {
    Emp.find((err, emplys) => {
        if (err) {
            res.send(err);
        }
        res.json(emplys);
    });
};

const creatEmpolyee = async (req, res) => {
    const emp = await Emp.create({
        fullname: req.body.fullname,
        gender: req.body.gender,
        tell: req.body.tell,
        email: req.body.email,
        address: req.body.address,
        department: req.body.type,
        salary: req.body.salary,
        createdBy: req.body.createdBy,
        status: req.body.status,
    });
    res.json(emp);
};

const updateEmployee= (req, res) => {
    Emp.findOneAndUpdate(
        { _id: req.params.staffid },
        {
            ...req.body
        },
        { new: true },
        (err, Emp) => {
            if (err) {
                res.send(err);
            } else res.json(Emp);
        }
    );
};

const deleteEmpolyee = (req, res) => {
    Emp.deleteOne({ _id: req.params.staffid })
        .then(() => res.json({ message: "Employee Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getEmpolyee,
    creatEmpolyee,
    updateEmployee,
    deleteEmpolyee,
};
