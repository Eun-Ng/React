import Button from './Button';
import styles from './App.module.css';
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState();

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log('I run all the time');
  useEffect(() => {
    console.log('Call the API');
  }, []);
  useEffect(() => {
    console.log('SEARCH FOR', keyword);
  }, []);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
