const Tenant = require("../model/tenants");

const getTenants = (req, res) => {
    Tenant.find((err, tenants) => {
        if (err) {
            res.send(err);c
        }
        res.json(tenants);
    });
};


const getTenant = async (req, res) => {
    const { tenantid } = req.params


    const tenants = await Tenant.findById(tenantid)
    Tenant(tenants)

    res.status(200).json(tenants)
}
const createtenant = async (req, res) => {
    const tenant = await Tenant.create({
        tenantid: req.body.tenantid,
        fullname: req.body.fullname,
        gender: req.body.gender,
        tell: req.body.tell,
        address: req.body.address,
        guarantid: req.body.guarantid,
        staffid: req.body.guarantid,
    });

    // unit.save((err, unit) => {
    //   if (err) {
    //     res.send(err);
    //   }

    // });
    res.json(tenant);
};

const updatetenant = (req, res) => {
    Tenant.findOneAndUpdate(
    
        { _id: req.params.tenantid },

        
        {
            $set: {
                tenantid: req.body.tenantid,
                fullname: req.body.fullname,
                gender: req.body.gender,
                tell: req.body.tell,
                address: req.body.address,
                guarantid: req.body.guarantid,
                staffid: req.body.staffid,
            },

            
        },
        { new: true },
        (err, Tenant) => {
            if (err) {
                res.send(err);
            } else res.json(Tenant);
        }
    );
};

const deleteTenant = (req, res) => {
    Tenant.deleteOne({ _id: req.params.tenantid })
        .then(() => res.json({ message: "tenant Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getTenants,
    getTenant,
    createtenant,
    updatetenant,
    deleteTenant,
};
