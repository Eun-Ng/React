// default api fetch
// api library axios
import {useState, useEffect} from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';

function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);

    // fetch(SERVER_URL)
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(todoList);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, {text, done});
    fetchData();
    // fetch(SERVER_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name='text' />
        <input name='done' type='checkbox' />
        <input type='submit' value='추가' />
      </form>
      {todoList?.map((todo) => (
        // optional chaining
        <div key={todo.id} style={{display: 'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
