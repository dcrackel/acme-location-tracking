const express = require('express');
const router = express.Router();
const Person = require('../../model/People');
const ObjectId = require('mongodb').ObjectId;

//get all members
router.get('/', (req, res) => {
    Person.find({}, (err, people) => {
        if (err) {
            return res.status(400).json({msg: `Error finding people`})
        }
        return res.json(people);
    });
});


// get single member by object id or by email
router.get('/:id', (req, res) => {
    const filter = (req.params.id.indexOf('@') > -1) ? {email:req.params.id} : {_id:new ObjectId(req.params.id)}
    Person.find(filter, (err, member) => {
        if (err) {
            return res.status(400).json({msg: `No member with id of ${req.params.id} not found!`})
        }
        return res.json(member);
    });
    res.status(200)
});

//create member
router.post('/', (req, res) => {
    const newPeople = new Person(
        {
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            picture: req.body.picture
        });

    if(!req.body.name || !req.body.email || !req.body.location || !req.body.picture){
        return res.status(400).json({msg: 'please include a name, email, location, and picture url'});
    }

    try {
        newPeople.save({newPeople}, (err, result) => {
            if (err) {
                console.log(err)
                //return res.status(400).json({msg: 'Error saving member data'});
            }
        });
        res.json(newPeople);
    } catch(err) {
        return res.status(500).json({msg: 'Error saving member data'});
    }
});

// update single member
router.put('/:id', async (req, res) => {
    if (req.params.id === 'undefined')  return res.status(400).json({msg: 'id is invalid'});
    const found = await Person.findOne({_id: new ObjectId(String(req.params.id))});

    if (found) {
        const updMember = req.body;
        found.name = updMember.name ? updMember.name : found.name;
        found.email = updMember.email ? updMember.email : found.name;
        found.location = updMember.location ? updMember.location : found.location;
        found.picture = updMember.picture ? updMember.picture : found.picture;
        found.admin = updMember.admin //? updMember.admin : found.admin;

        try {
            found.save({found}, (err, result) => {
                if (err) {
                    console.error("found.save ERROR: " + err)
                    return res.status(400).json({msg: 'Error saving member data'});
                }
            });
        } catch(e) {
            console.log("ERROR in SAVING object" + e)
            return res.status(400).json({msg: 'Error saving member data'});
        }

        return res.json({msg: 'Member updated', found})
    }
    res.status(400).json({msg: `No member with id of ${req.params.id} not found!`})
});

// delete single member
router.delete('/:id', async (req, res) => {
    const found = await Person.findOne({_id: new ObjectId(req.params.id)});

    if (found) {
        found.deleteOne({found}, (err, result) => {
            if (err) return res.status(400).json({msg: 'Error removing member data'});
        })
        return res.status(200).json({msg: `Member data removed`})
    }
    res.status(400).json({msg: `No member with id of ${req.params.id} not found!`})
});


module.exports = router;