import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Taskinput from "./components/Taskinput";
import Todoitem from "./components/Todoitem";
import "./App.css";

//display components on the same page
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  // useEffect(() =>{
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // },[todos]);

  return (
    <>
      <div className="app">
        {/* navigation bar */}
        <Nav />
        <div className="container">
          <div className="taskinput-row">
            <Taskinput
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div className="header-row">
            <Header />
          </div>
          <div className="todoitem-row">
            <Todoitem
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
