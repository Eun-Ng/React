const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
  const Word = useState();
  const Value = useState();
  const Result = useState();

  const OnSubmitForm = () => {};
  const OnChange = () => {};

  const OnRefInput = () => {};

  return (
    <>
      <div>끝말잇기</div>
      <form>
        <input />
        <button>입력</button>
      </form>
      <div></div>
    </>
  );
};

module.exports = WordRelay;
