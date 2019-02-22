//use models PetSchema
const Pet = require("./models");

//export to routes.js
module.exports = {


    all: (req, res) => {
        Pet.find({}).sort('type')
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },


    perId: (req, res) =>{
        Pet.findById(req.params.id)
        .then(result => res.json( result))
        .catch(err => res.json(err))
    },

    // findName:(req,res)=>{
    //     Pet.findOne({Name:req.body.Name})
    //     .then(results => res.json(results))
    //     //if there's error, respond with json file of error
    //     .catch(err => res.json(err))
    // },

    

    new:(req, res)=>{
        Pet.create(req.body)

        .then(results => res.json(results))
        .catch(err => res.json(err))
    },
 
    update:(req, res)=>{
        Pet.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true, context: 'query'})
        .then(results => res.json(results))
        .catch(err => res.json(err))
    },


    delete:(req, res)=>{
        Pet.findByIdAndDelete(req.params.id)
        .then(results => res.json(results))
        .catch(err => res.json(err))
    },


    like:(req, res)=>{
        Pet.findByIdAndUpdate({_id: req.params.id}, {$inc: {"likes":1}})
        .then(results => res.json(results))
        .catch(err => res.json(err))
    }

}