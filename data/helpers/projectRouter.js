// imports express and creates the router (chaining them together)
const router = require('express').Router();

// import model
const projectDb = require('./projectModel.js');


// GET projects
router.get('/', (req, res) => {
    projectDb.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error retrieving the projects!'})
        })
})

// GET project actions
router.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    
    projectDb.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error retrieving the project actions!'})
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
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    projectDb.remove(id)
        .then(deleteProject => {
            res.status(200).json(deleteProject)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error deleting the project!'})
        })
})

// export
module.exports = router;