let TODOS = [
    {
        id: 1,
        text: "Buy apples"
    },
    {
        id: 2,
        text: "Buy oranges"
    },
    {
        id: 3,
        text: "Buy pears"
    }
];
export function addTodo(text) {
    const newTodo = {
        id: Math.random(),
        text
    };
    TODOS.push(newTodo);
    return newTodo;
}
export function getTodo(id) {
    const todo = TODOS.find((todo) => todo.id === id);
    if (!todo) {
        throw new Error("Todo not found");
    }
    return todo;
}
export function getTodos() {
    return TODOS;
}
export function removeTodo(id) {
    TODOS = TODOS.filter((todo) => todo.id !== id);
}
export function updateTodo(id, text) {
    const todo = getTodo(id);
    todo.text = text;
    return todo;
}
