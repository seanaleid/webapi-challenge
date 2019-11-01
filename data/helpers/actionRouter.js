const router = require('express').Router();

// import model
const actionDB = require('./actionModel');

// GET
router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    actionDB.get(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error retrieving the action!'})
        })
})

// POST
router.post('/', (req, res) => {
    const newAction = req.body;
    
    actionDB.insert(newAction)
        .then(newAction => {
            res.status(201).json(newAction)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error adding the action!'})
        })
})

// PUT

// DELETE

// export
module.exports = router;