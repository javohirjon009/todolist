import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

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

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">TodoList</h2>
      <input
        className="border-2 rounded p-2 text-black bg-blue-100 w-100"
        type="text"
        value={input}
        placeholder="Biror nima kiriting . ."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border-2 rounded p-2 m-2 text-green-500 hover:text-green-300 cursor-pointer"
        onClick={addTodo}
      >
        Qo'shish
      </button>

      <ul className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            <span>{todo}</span>
            <button
              className="border-2 rounded p-1 text-red-600 hover:text-red-400 cursor-pointer"
              onClick={() => deleteTodo(index)}
            >
              O‘chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
