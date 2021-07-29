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


// get single member
router.get('/:id', (req, res) => {
    Person.find({_id:new ObjectId(req.params.id)}, (err, member) => {
        if (err) {
            return res.status(400).json({msg: `No member with id of ${req.params.id} not found!`})
        }
        return res.json(member);
    });
});

//create member
router.post('/', (req, res) => {
    const newPeople = new Person(
        {
            name: req.body.name,
            email: req.body.email,
            status: 'active'
        });

    if(!req.body.name || !req.body.email){
        return res.status(400).json({msg: 'please include a name and email'});
    }

    newPeople.save({newPeople}, (err, result) => {
        if (err) return res.status(400).json({msg: 'Error saving member data'});
    });

    res.json(newPeople);
});

// update single member
router.put('/:id', async (req, res) => {
    const found = await Person.findOne({_id: new ObjectId(req.params.id)});

    if (found) {
        const updMember = req.body;
        console.log("found found to update");
        console.log(found);

        found.name = updMember.name ? updMember.name : found.name;
        found.email = updMember.email ? updMember.email : found.name;

        found.save({found}, (err, result) => {
            if (err) return res.status(400).json({msg: 'Error saving member data'});
        });

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