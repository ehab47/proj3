const models = require("../models");
console.log(models.Users);
module.exports = {
    getOne: (req, res) => {
        const id = req.params.id;
        models.User.findOne({
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    getAll: (req, res) => {
        models.User.find()
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    createOne: (req, res) => {
        const user = {
            email: req.body.email,
            //we will generate a real hash and salt if we intend
            //for users to work
            hash: 123123,
            salt: 123123
        }
        models.User.create(user)
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        })
    },
    updateOne: (req, res) => {
        const id = req.params.id;
        const newUser = {
            email: req.body.email,
            //we will generate a real hash and salt if we intend
            //for users to work
            hash: 123123,
            salt: 123123
        }
        models.User.update(newUser, {
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    },
    deleteOne: (req, res) => {
        const id = req.params.id;
        const newUser = {
            email: req.body.email,
            //we will generate a real hash and salt if we intend
            //for users to work
            hash: 123123,
            salt: 123123
        }
        models.User.destroy({
            where: {
                id: id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            res.json(err).status(400);
        });
    }

}