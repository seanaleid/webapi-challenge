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
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const updateAction = req.body;
    
    actionDB.update(id, updateAction)
        .then(updateAction => {
            res.status(201).json(updateAction)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error updating the action!'})
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    actionDB.remove(id)
        .then(deleteAction => {
            res.status(201).json(deleteAction)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error deleting the action!'})
        })
})

// export
module.exports = router;