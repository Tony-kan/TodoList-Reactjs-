import React from "react";

//a todo item component
//returns a list item like card with text
//and button for managing the text

const Todoitem = ({ todos, setTodos, editTodo, setEditTodo }) => {
  //function to handle Completed task on the lsit
  const handleDone = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //function to handle editing of the task
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  //function to handle deleting of the task from the list
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* {
    todos.map((todo)=>(
        <li className='todo-item' key={todo.id}>
            <input type="text"
            value={todo.title}
            className='list'
            onChange={(event) => event.preventDefault()}
            />
        </li>
    ))
} */}
      {todos.map((todo) => (
        <li className="todo-item">
          <input
            type="text"
            value={todo.title}
            className={`list-item ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="btn-section">
            <button className="btn done-btn" onClick={() => handleDone(todo)}>
              {/* <i className='fa fa-check-circle'></i> */}
              Done
            </button>
            <button className="btn edit-btn" onClick={() => handleEdit(todo)}>
              {/* <i className='fa fa-edit'></i> */}
              Edit
            </button>
            <button
              className="btn delete-btn"
              onClick={() => handleDelete(todo)}
            >
              {/* <i className='fa fa-trash'></i> */}
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todoitem;
