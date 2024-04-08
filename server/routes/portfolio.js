const express = require('express')
const mongoose = require('mongoose')
const Project = require('../schemas/Project.js')

const router = express.Router()

router.get('/get', async (req, res) => {
    const projects = await Project.find()
    res.status(200).json({
        message: JSON.stringify(projects)
    })
})

router.post('/post', async (req, res) => {
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
})

router.put('/put', async (req, res) => {
    console.log('Project put', req.body)
})

router.delete('/delete', async (req, res) => {})


module.exports = router