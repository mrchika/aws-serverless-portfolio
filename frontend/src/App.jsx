import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const load = async () => {
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const add = async () => {
    if (!text) return;
    await axios.post(`${API}/todos`, { title: text });
    setText("");
    load();
  };

  const remove = async (id) => {
    await axios.delete(`${API}/todos/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Todo App - FastAPI + React + Docker</h1>
      <input 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Add new todo"
      />
      <button onClick={add}>Add</button>
      
      <ul>
        {todos.map(t => (
          
             <li key={t.id} style={{ marginTop: 10, textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.title} - {t.completed ? "Done" : "Pending"}
            <button onClick={() => toggle(t.id, t.completed)} style={{ marginLeft: 10 }}>
              {t.completed ? "Undo" : "Done"}
            </button>
            <button 
              onClick={() => remove(t.id)} 
              style={{ marginLeft: 10, background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const toggle = async (id, completed) => {
    await axios.put(`${API}/todos/${id}`, { completed: !completed });
    load();
  };