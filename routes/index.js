const router = require("express").Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.post("/users/register", (req, res) => {
    User.create(req.body)
        .then(function (dbArticle) {
            res.json(dbArticle);
        })
        .catch(function (err) {
            res.json(err);
        });
});
router.get("/user", (req,res)=>{
    User.find().exec()
        .then((users)=>res.json(users))
        .catch((err)=>{
            res.json(err)
        })
}) // select all
router.get("/user/:id",(req,res)=>{
    
    const id =req.params.id
    console.log("id", id)
    User.findById(id).exec()
    .then((user)=>res.json(user))
    .catch((err)=>{
        res.json(err)
    })
})  // select one

router.put("/user/:id", (req,res)=>{
    const id =req.params.id
    const newData = req.body
    User.findById(id).exec()
    .then((user)=>{
        console.log("user",user)
        if(newData.email){
            user.email=newData.email
        }
        // add one for each field

        user.save()
        .then((user)=>{
            res.json(user)
        })

    })
})  // updata

router.delete("/user/:id",(req,res)=>{
    const id = req.params.id
    User.findByIdAndRemove(id).exec()
    .then((resulet)=>res.json(resulet))
    .catch((err)=>{
        res.json(err)
    })
})  // delete


module.exports=router