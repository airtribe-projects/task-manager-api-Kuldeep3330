const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../task.json')

function readTasks() {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf-8');
    try {
      const parsed = JSON.parse(data);
      return parsed.tasks || [];
    } catch (err) {
      return [];
    }
  }

// let tasks = JSON.parse(fs.readFileSync(filePath, 'utf-8')).tasks;

const taskCreated = async (req, res) => {
  const { title, description, completed } = req.body
  if (!title || !description)
    return res.status(400).json({ error: 'tasks with invalid data' })
  const tasks = readTasks();
  const idCounter =
    tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1

  const newTask = {
    id: idCounter,
    title,
    description,
    completed: completed ?? false,
  }
  tasks.push(newTask)
  fs.writeFileSync(filePath, JSON.stringify({ tasks }, null, 2))
  res.status(201).json(newTask)
}

const getAllTasks = async (req, res) => {
  try {
    const tasks = readTasks();
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' })
  }
}

const getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const tasks = readTasks();

    const task = tasks.find((task) => task.id === id)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    res.status(200).json(task)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read task data' })
  }
}

const updateTaskById = async (req, res) => {
  const id = parseInt(req.params.id)
  const { title, description, completed } = req.body
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({
      error: 'Invalid data. Ensure title and description are strings and completed is a boolean.',
    });
  }

  try {
    const tasks = readTasks();

    const taskInd = tasks.findIndex((task) => task.id === id)
    if (taskInd === -1) {
      return res.status(404).json({ error: 'invalid id' })
    }

    tasks[taskInd] = { id, title, description, completed }
    fs.writeFileSync(filePath, JSON.stringify({ tasks }, null, 2))

    res.status(200).json(tasks[taskInd])
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' })
  }
}

const deleteTaskById = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const tasks = readTasks();

    const taskInd = tasks.findIndex((task) => task.id === id)

    if (taskInd === -1) {
      return res.status(404).json({ error: 'invalid id' })
    }

    const deletedTask = tasks.splice(taskInd, 1)[0]
    fs.writeFileSync(filePath, JSON.stringify({ tasks }, null, 2))

    res.status(200).json(deletedTask)
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
}

module.exports = {
  taskCreated,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
}
