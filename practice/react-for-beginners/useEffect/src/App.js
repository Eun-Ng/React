import Button from './Button';
import styles from './App.module.css';
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState();
  const [showing, setShowing] = useState(false);

  // useEffect
  const onClickCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    console.log('I run only once');
  }, []);
  useEffect(() => {
    console.log('I run when "keyword" changes');
  }, [keyword]);
  useEffect(() => {
    console.log('I run when "counter" changes');
  }, [counter]);

  const onClickDisplay = () => setShowing((prev) => !prev);

  // clean up function
  const Hello = () => {
    const hiFunc = () => {
      console.log('Hi! :)');
      return byeFunc;
    };
    const byeFunc = () => {
      console.log('Bye! :(');
    };
    useEffect(hiFunc, []);
    return <h1>Hello</h1>;
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here'
      />
      <h1>{counter}</h1>
      <button onClick={onClickCounter}>Click me</button>

      <div>{showing ? <Hello /> : null}</div>
      <button onClick={onClickDisplay}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
