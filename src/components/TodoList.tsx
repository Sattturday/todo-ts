import { useAppSelector } from '../hook';

import TodoItem from './TodoItem';
// import { ITodo } from '../types/data';

// interface ITodoListProps {
//   items: ITodo[];
//   removeTodo: (id: number) => void;
//   toggleTodo: (id: number) => void;
// }

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
