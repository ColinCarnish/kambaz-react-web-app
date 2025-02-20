import TodoItem from "./TodoItem";
import todos from "./todos.json"; 
interface Todo {
  title: string;
  status: string;
  done: boolean;
}
export default function TodoList() {
  const typedTodos: Todo[] = todos as Todo[];
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {typedTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
