const express= require('express')
const { taskCreated } = require('../controllers/tasks.controller')
const router=express.Router()

router.post('/', taskCreated)

module.exports= router