import React, { useRef} from "react";

const App = () => {
  // const [state, setSate] = useState("");

  // let ref = useRef(null);
  // const click = () => {
  //   if (ref.current) {
  //     ref.current.style.backgroundColor = "red";
  //   }
  // };
  return <div>

        .todo-item { display: flex; justify-content: space-between; margin: 5px 0; }

    <h2>TodoList</h2>
    <input type="text" id="todoInput" placeholder="Yangi vazifa">
    <button onclick="addTodo()">Qo'shish</button>
    <ul id="todoList"></ul>
    <script src="script.js"></script>

  </div>;
};

export default App;
