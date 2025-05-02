const express= require('express')
const { taskCreated, getAllTasks, getTaskById } = require('../controllers/tasks.controller')
const router=express.Router()

router.post('/', taskCreated)
router.get('/', getAllTasks)
router.get('/:id', getTaskById)

module.exports= router