# 📋 Task Manager API

This is a simple **Node.js + Express** backend API for managing tasks. It uses a JSON file (`task.json`) for data storage instead of a database. Perfect for learning REST APIs and testing with tools like Postman or automated tests.

---

## Features

- Create, read, update, and delete (CRUD) tasks
- File-based storage using `task.json`
- Input validation and error handling
- Tested using **Tap** and **Supertest**

---

## Project Structure

project/
│
├── app.js # Entry point (Express server setup)
├── routes/
│ └── tasks.route.js # API routes for tasks
├── controllers/
│ └── tasks.controller.js # Business logic (CRUD operations)
├── test/
│ └── server.test.js # API test cases using tap + supertest
├── task.json # Data storage file
└── package.json # Project metadata and scripts
└──package-lock.json #
└──.gitignore #

---

## Requirements

- [Node.js](https://nodejs.org/) (v20.15.1)
- [npm](https://www.npmjs.com/)

---

## Setup Instructions

1. **Clone the repository**
   git clone https://github.com/airtribe-projects/task-manager-api-Kuldeep3330.git
   cd task-manager-api-Kuldeep3330.git

   npm install

   npm run test

# API Endpoints

http://localhost:3000/tasks

# GET /

Get all tasks

# GET /:id

Get a task by ID

# POST /

Create a new task

# PUT /:id

Update an existing task

# DELETE /:id

Delete a task by ID
