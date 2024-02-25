import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';

// import { addTodo } from './store/todoSlice';
import { fetchTodos, addNewTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const { loading, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      //dispatch(addTodo(text));
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
// import { useState, useRef, useEffect } from 'react';

// import { ITodo } from './types/data';
// import TodoList from './components/TodoList';

// const App: React.FC = () => {
//   const [value, setValue] = useState('');
//   const [todos, setTodos] = useState<ITodo[]>([]);

//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
//     setValue(e.target.value);
//   };

//   const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
//     if (e.key === 'Enter') addTodo();
//   };

//   const addTodo = () => {
//     if (value) {
//       setTodos([
//         ...todos,
//         {
//           id: Date.now(),
//           title: value,
//           complete: false,
//         },
//       ]);
//       setValue('');
//     }
//   };

//   const removeTodo = (id: number): void => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleTodo = (id: number): void => {
//     setTodos(
//       todos.map(todo => {
//         if (todo.id !== id) return todo;

//         return {
//           ...todo,
//           complete: !todo.complete,
//         };
//       }),
//     );
//   };

//   useEffect(() => {
//     if (inputRef.current) inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <div>
//         <input
//           value={value}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           ref={inputRef}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
//     </div>
//   );
// };

// export default App;
