// imports express and creates the router (chaining them together)
const router = require('express').Router();

// import model
const projectDb = require('./projectModel');

// GET
router.get('/', (req, res) => {
    projectDb.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error retrieving the projects!'})
        })
})

// POST

// PUT

// DELETE

// export
module.exports = router;