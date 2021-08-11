import { useState } from 'react';
import './App.scss';
import TodoForm from './components/Todolist/TodoForm';
import Todolist from './components/Todolist/Todolist';

function App() {
  const [todolist, setTodolist] = useState([
      {id: 1, title:' learn Nodejs'},
      {id: 2, title:' learn English'},
      {id: 3, title:' learn SCSS'},
      {id: 4, title:' learn MongoDB'},
      {id: 5, title:' learn Animation'}
    ]);

    function handleTodoClick(todo){
      //console.log(todo);
      const index = todolist.findIndex(x => x.id === todo.id);
      if(index < 0) return;

      const newTodolist = [...todolist];
      newTodolist.splice(index,1);
      setTodolist(newTodolist);
    }
  
    function handleTodoFormSubmit (formValue){
      //console.log('formsubmit:', formValue);
      const todo = {
        id: todolist.length + 1,
        ...formValue,
      };
      const newTodolist = [...todolist];
      newTodolist.push(todo);
      setTodolist(newTodolist);
    }
  
  return (
    <div className="app">
      {/* To do list */}
      <h1>React-hook-Todolist</h1>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <Todolist todos={todolist} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
