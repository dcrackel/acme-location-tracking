const express = require('express');
const router = express.Router();
const Log = require('../../model/Log');

router.get('/', (req, res) => {
    Log.find({}, (err, logs) => {
        if (err) {
            return res.status(400).json({msg: `Error finding people`})
        }
        return res.json(logs);
    });
});

//create member
router.post('/', (req, res) => {
    const newLog = new Log(
        {
            user_id: req.body.user_id,
            name: req.body.name,
            location: req.body.location
        });

    if(!req.body.user_id || !req.body.name || !req.body.location){
        return res.status(400).json({msg: 'please include a user_id, name, and location,'});
    }

    newLog.save({newLog}, (err, result) => {
        if (err) return res.status(400).json({msg: 'Error saving member data'});
    });


    res.json(newLog);
});

module.exports = router;