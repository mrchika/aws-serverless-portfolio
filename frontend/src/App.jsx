import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (!todoText.trim()) return;
    const newTodo = { id: Date.now(), text: todoText };
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  return (
    <div style={{padding: 20, fontFamily: 'Arial'}}>
      <h1>Todo List</h1>
      <input 
        value={todoText}
        onChange={event => setTodoText(event.target.value)}
        placeholder="Enter a todo"
        onKeyDown={e => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;