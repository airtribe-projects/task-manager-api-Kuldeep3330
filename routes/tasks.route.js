const express= require('express')
const { taskCreated, getAllTasks } = require('../controllers/tasks.controller')
const router=express.Router()

router.post('/', taskCreated)
router.get('/', getAllTasks)

module.exports= router