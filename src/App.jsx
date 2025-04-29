import React from "react";

const App = () => {
  return (
    <div>
      <h2>TodoList</h2>
      <input type="text" id="todoInput" placeholder="Yangi vazifa" />
      <button onclick="addTodo()">Qo'shish</button>
      <ul id="todoList"></ul>
      <script src="script.js"></script>
    </div>
  );
};

export default App;
