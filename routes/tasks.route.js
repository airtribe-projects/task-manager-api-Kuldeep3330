const express= require('express')
const { taskCreated, getAllTasks, getTaskById, updateTaskById, deleteTaskById } = require('../controllers/tasks.controller')
const router=express.Router()

router.post('/', taskCreated)
router.get('/', getAllTasks)
router.get('/:id', getTaskById)
router.put('/:id', updateTaskById)
router.delete('/:id', deleteTaskById)

module.exports= router