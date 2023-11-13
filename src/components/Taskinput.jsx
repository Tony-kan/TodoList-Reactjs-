import React, { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

//a form component
//used to get input  from users
//add a task into the list
//returns an array of text called to todo

const Taskinput = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
    // console.log(event.target.value)
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuid4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
    console.log(event);
  };
  return (
    <form className="taskinput-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter todo task ...."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="btn-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Taskinput;
