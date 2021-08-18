import { useEffect, useState } from 'react';
import './App.scss';
import queryString from 'query-string';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/Postlist/PostList';
import TodoForm from './components/Todolist/TodoForm';
import Todolist from './components/Todolist/Todolist';
import FiltersForm from './components/Postlist/FiltersForm';
import Clock from './components/Clock/Clock';
import MagicBox from './components/Magicbox/MagicBox';

function App() {
  const [todolist, setTodolist] = useState([
      {id: 1, title:' learn Nodejs'},
      {id: 2, title:' learn English'},
      {id: 3, title:' learn SCSS'},
      {id: 4, title:' learn MongoDB'},
      {id: 5, title:' learn Animation'}
    ]);

    const [postlist, setPostlist] = useState([]);
    const [pagination, setPagination] = useState({
      _page: 1,
      _limit: 10,
      _totalRows: 11,
    })

    const [filters, setFilters] = useState({
      _limit: 10,
      _page: 1,
    })

    //npm i --save query-string để chuyển object thành chuỗi _limit=10&_page=1

    useEffect(() => {
      async function fetchPostlist () {
        try {
          const paramsString = queryString.stringify(filters);
          const RequestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response = await fetch(RequestUrl);
          const responseJSON = await response.json();
          console.log({responseJSON});

          const {data, pagination} = responseJSON;
          setPostlist(data);
          setPagination(pagination);
        } catch (error) {
          console.log('fetch data error', error.message);
        }
      }

      fetchPostlist();
    }, [filters]);

    function handlPageChange (newPage){
      console.log('new page', newPage);
      setFilters({
        ...filters,
        _page: newPage,
      })
    }

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

    function handleSearchItem (newFilters){
      setFilters({
        ...filters,
        _page:1,
        title_like: newFilters.searchItem,
      })
    }
    const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      {/* To do list */}
      <h1>Post list</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/>
      <Todolist todos={todolist} onTodoClick={handleTodoClick}/> */}
      {/* <FiltersForm onSubmit={handleSearchItem} />
      <PostList posts={postlist}/>     
      <Pagination pagination={pagination}
        onChangepage = {handlPageChange}/>
        
        */}
        {/* {showClock && <Clock/>}
      <button onClick={()=>{setShowClock(!showClock)}}>Hide Clock</button> */}
      <MagicBox/>
    </div>                                      
  );
}
export default App;
