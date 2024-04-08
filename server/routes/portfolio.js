const express = require('express')
const mongoose = require('mongoose')
const Project = require('../schemas/Project.js')

const router = express.Router()

router.get('/get', async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json({
            message: JSON.stringify(projects)
        })
    }
    catch (err) {
        const errMsg = 'Error getting projects'
        console.log(errMsg)
        res.status(500).json({
            message: errMsg
        })
    }
})

router.post('/post', async (req, res) => {
    try {
        Project.create({
            title: req.body.title,
            desc: req.body.desc,
            repo: req.body.repo,
            demo: req.body.demo,
            dateCreated: req.body.dateCreated
        })

        res.status(200).json({
            message: `Project titled ${req.body.title} posted!`
        })
    }
    catch (err) {
        const errMsg = 'Error making post.\n' + err
        console.log(errMsg)
        res.status(500).json({
            message: errMsg
        })
    }
})

router.put('/put', async (req, res) => {
    try {
        const targetId = req.body.id
        let projectUpdate = {}

        for (const [key, val] of Object.entries(req.body)) {
            if (key != 'id' && val !== null && val !== "") {
                projectUpdate[key] = val
            }
        }

        const update = await Project.findByIdAndUpdate(targetId, projectUpdate)
        res.status(200).json({
            message: `Project ${targetId} updated` 
        })
    }
    catch (err) {
        const errMsg = `Error updating project ${targetId}\n` + err
        console.log(errMsg)
        res.status(500).json({
            message: errMsg
        })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.body.id)
        res.status(200).json({
            message: `Project ${req.body.id} deleted`
        })
    }
    catch (err) {
        const errMsg = `Error deleting project ${req.body.id}\n` + err
        console.log(errMsg)
        res.status(500).json({
            message: errMsg
        })
    }
})


module.exports = router