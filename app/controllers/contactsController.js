const Contact = require('../models/contact')


module.exports.list = (req, res) => {
    Contact.find({ user: req.user._id })
        .then((contacts) => {
            res.json(contacts)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id

    Contact.findById({
        _id: id,
        user: req.user._id
    })
    .then((contact)=>{
       if(contact)
       {
           res.send(contact)
       }
       else{
           res.status(404).send({})
       }
    })
    .catch((err)=>{
        res.send(err)
    })
}

//creating contact
module.exports.create = (req, res) => {
    const data = req.body
    const contact = new Contact(data)
    contact.user = req.user.id
    contact.save()
        .then((contact) => {
            res.json(contact)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    console.log(id)
    const body = req.body
    console.log(body)
    Contact.findByIdAndUpdate({ _id: id, user: req.user._id }, { $set: body }, { new: true })
        .then((contact) => {
            if (contact) {
                res.json(contact)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Contact.findByIdAndDelete({ _id: id, user: req.user._id })
        .then((contact) => {
            if (contact) {
                res.json(contact)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch(err => {
            res.send(err)
        })
}
