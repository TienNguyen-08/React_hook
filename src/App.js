import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/Postlist/PostList';
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

    const [postlist, setPostlist] = useState([]);

    useEffect(() => {
      async function fetchPostlist () {
        try {
          const RequestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
          const response = await fetch(RequestUrl);
          const responseJSON = await response.json();
          console.log({responseJSON});

          const {data} = responseJSON;
          setPostlist(data);
        } catch (error) {
          console.log('fetch data error', error.message);
        }
        console.log(postlist);
      }

      fetchPostlist();
    }, []);

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
      <h1>Post list</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/>
      <Todolist todos={todolist} onTodoClick={handleTodoClick}/> */}
      <PostList posts={postlist}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    </div>                                      
  );
}
export default App;
