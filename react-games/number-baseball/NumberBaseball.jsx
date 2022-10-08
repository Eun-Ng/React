import React, {useRef, useState, useCallback} from 'react';
import Try from './Try';

const getNumbers = () => {
  // 숫자 네개를 랜덤하게 뽑는 함수
};

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers);
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onChangeInput = () => {};

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitFrom}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력</button>
        <div>
          기회: {tries.length}/{10}
        </div>
        <ul>
          {tries.map((a, b) => (
            <Try />
          ))}
        </ul>
      </form>
    </>
  );
};

export default NumberBaseball;
