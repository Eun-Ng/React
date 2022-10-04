const React = require('react');
const {Component, useState, useRef} = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (setWord[word.length - 1] === value[0]) {
      set({
        result: '딩동댕',
        word: .value,
        value: '',
      });
      input.focus();
    } else {
      setState({
        result: '땡',
        value: '',
      });
      input.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>클릭!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
