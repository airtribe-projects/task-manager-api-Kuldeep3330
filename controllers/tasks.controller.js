const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../task.json')

let taskData = require(filePath)

let tasks = taskData.tasks
let idCounter = tasks.length + 1

const taskCreated = async (req, res) => {
  const { title, description, completed } = req.body
  if (!title || !description)
    return res.status(400).json({ error: 'tasks with invalid data' })

  const task = {
    id: idCounter++,
    title,
    description,
    completed: completed ?? false,
  }
  tasks.push(task)
  res.status(201).json(task)
}

const getAllTasks = async (req, res) => {
  res.status(200).json(tasks)
}

const getTaskById = async (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find((task) => task.id === id)
  if (!task) res.status(400).json({ error: 'incorrect id || task not found' })

  res.status(200).json(task)
}



module.exports = { taskCreated, getAllTasks, getTaskById }
