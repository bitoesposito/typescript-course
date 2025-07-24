import express from "express";
import { addTodo, getTodos } from "../data.js";
const router = express.Router();
router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: "Todo added!", todo: addedTodo });
});
router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json({ todos: todos });
});
export default router;
