const Emp = require("../model/empolyee");

const getEmpolyees = (req, res) => {
    Emp.find((err, emplys) => {
        if (err) {
            res.send(err);
        }
        res.json(emplys);
    });
};



const getEmpolyee = async (req, res) => {
    const { id } = req.params


    const emplys = await Emp.findById(id)
    Emp(emplys)

    res.status(200).json(user)
}

const creatEmpolyee = async (req, res) => {
    const emp = await Emp.create({
        staffid: req.body.staffid,
        fullname: req.body.fullname,
        gender: req.body.gender,
        tell: req.body.tell,
        address: req.body.address,
        type: req.body.type,
        salary: req.body.salary,
        createdBy: req.body.createdBy,
        apartid: req.body.apartid,
        status: req.body.status,


    });

    // unit.save((err, unit) => {
    //   if (err) {
    //     res.send(err);
    //   }

    // });
    res.json(emp);
};

const updateEmployee= (req, res) => {
    Emp.findOneAndUpdate(
        { _id: req.params.staffid },
        {
            $set: {
                staffid: req.body.staffid,
                fullname: req.body.fullname,
                gender: req.body.gender,
                tell: req.body.tell,
                address: req.body.address,
                type: req.body.type,
                salary:req.body.salary,
                createdBy: req.body.createdBy,
                apartid:req.body.apartid,
                status:req.body.status
            },
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
