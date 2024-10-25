import React from "react";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
);}


{
  /* <li className="list-group-item">
          <input
            defaultValue={todo.title}
            className="form-label mb-2 me-2"
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <button
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
            className="btn btn-warning me-2"
          >
            Update{" "}
          </button>
          <button
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
            className="btn btn-success"
          >
            Add
          </button>
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
            <button
              onClick={() => setTodo(todo)}
              id="wd-set-todo-click"
              className="btn btn-primary ms-5 me-2"
            >
              Edit{" "}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
              className="btn btn-danger"
            >
              Delete{" "}
            </button>
          </li>
//         ))} */
}
//       </ul>
//       <hr />
//     </div>
//   );
// }
