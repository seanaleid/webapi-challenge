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
router.post('/', (req, res) => {
    const newProject = req.body;
    
    projectDb.insert(newProject)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error adding the new project!'})
        })
})

// PUT
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const updateProject = req.body;
    
    projectDb.update(id, updateProject)
        .then(updateProject => {
            res.status(200).json(updateProject)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error updating the project!'})
        })
})

// DELETE

// export
module.exports = router;