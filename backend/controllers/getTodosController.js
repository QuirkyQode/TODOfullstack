const Todo = require("../model/Todo");

exports.getTodosController = async(req, res) => {
    // const {todoId} = req.params
    const allTodos = await Todo.find()
    console.log("In GetTodo")
    res.json(allTodos)
} 