import React, {useState} from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return alert('empty!');
    } else {
      setToDos((currentArray) => [...currentArray, toDo]);
      setToDo('');
    }
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <div>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
