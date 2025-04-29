import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;
    const updatedTodos = todos.map((todo, i) =>
      i === editIndex ? editText.trim() : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">TodoList</h2>

      <div className="flex mb-4">
        <input
          className="flex-1 border-2 rounded p-2 text-black bg-blue-100"
          type="text"
          value={input}
          placeholder="Yangi vazifa"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 border-2 rounded px-4 py-2 text-green-500 hover:text-green-300"
          onClick={addTodo}
        >
          Qo'shish
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            {editIndex === index ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded p-1"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="text-blue-600 px-2 border-2 rounded p-1" onClick={saveEdit}>
                  Saqlash
                </button>
              </div>
            ) : (
              <>
                <span className="flex-1">{todo}</span>
                <div className="space-x-2">
                  <button
                    className="text-yellow-600 border-2 rounded p-1 hover:text-amber-300"
                    onClick={() => startEditing(index)}
                  >
                    Tahrirlash
                  </button>
                  <button
                    className="text-red-600 border-2 rounded p-1 hover:text-red-400"
                    onClick={() => deleteTodo(index)}
                  >
                    O‘chirish
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
