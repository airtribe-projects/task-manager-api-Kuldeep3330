let tasks=[];
let idCounter=1

const taskCreated=async(req, res)=>{
    const{title, description,completed }= req.body;
    if(!title || !description ) return res.status(400).json({error:"tasks with invalid data"})

    const task={
        id:idCounter++,
        title,
        description,
        completed: completed ?? false}
    tasks.push(task)
    res.status(201).json(task);

}

tap.test("GET /tasks", async (t) => {
    const response = await server.get("/tasks");
    t.equal(response.status, 200);
    t.hasOwnProp(response.body[0], "id");
    t.hasOwnProp(response.body[0], "title");
    t.hasOwnProp(response.body[0], "description");
    t.hasOwnProp(response.body[0], "completed");
    t.type(response.body[0].id, "number");
    t.type(response.body[0].title, "string");
    t.type(response.body[0].description, "string");
    t.type(response.body[0].completed, "boolean");
    t.end();
  });

    

module.exports = { taskCreated };