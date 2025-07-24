import express from "express";

import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../data.ts";

// enum is not supported in the current version of node i am using now(22.15.0) with the direct execution of the ts files, it is a limitation of the node compiler with the experimental-strip-types flag, to work with it you'd need to build it first and then run it with the node for js files, or use the experimental-transform-types flag to work with it but it is not recommended because it is not stable and it is not supported by the node compiler

// another way is defining erasableSyntaxOnly in the tsconfig.json file
// enum TODO_TYPE {
//   BASIC,
//   URGENT
// }

const router = express.Router();

router.post('/todos', (req, res) => {
  const text = req.body.text;
  const addedTodo = addTodo(text);
  res.json({message: "Todo added!", todo: addedTodo});
})

router.get('/todos', (req, res) => {
  const todos = getTodos();
  res.json({todos: todos});
})

router.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = getTodo(id);
  res.json({todo: todo});
})

router.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const text = req.body.text;
  const updatedTodo = updateTodo(id, text);
  res.json({message: "Todo updated!", todo: updatedTodo});
})

router.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  removeTodo(id);
  res.json({message: "Todo deleted!"});
})

export default router;