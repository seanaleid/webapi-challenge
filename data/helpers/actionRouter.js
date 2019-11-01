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
            res.status(500).json({ errorMessage: 'There was an error retrieving the actions!'})
        })
})

// POST


// PUT

// DELETE

// export
module.exports = router;