import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(res => setTodos(res.data))
      .catch(() => setTodos([]));
  }, []);

  const addTodo = () => {
    if (task.trim() === "") return;
    axios.post("http://localhost:3000/todos", { task })
      .then(res => {
        setTodos([...todos, res.data]);
        setTask("");
      });
  };

  const toggleTodo = (id, done) => {
    axios.put(`http://localhost:3000/todos/${id}`, { done: !done })
      .then(res => {
        setTodos(todos.map(t => t.id === id ? res.data : t));
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(t => t.id !== id));
      });
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-area">
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task..." 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <span onClick={() => toggleTodo(todo.id, todo.done)}>
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;