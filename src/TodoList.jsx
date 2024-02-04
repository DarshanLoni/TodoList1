import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo,deleteTodo}) { //props
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            id={todo.id}
            // completed={todo.completed}
            // title={todo.title} //both optional as we used spread operator
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
