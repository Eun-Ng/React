import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// Action Createor import
import {addNumber, minusNumber} from './redux/modules/counter';

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const {value} = e.target;
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    // Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  console.log(number);
  return (
    <div>
      <div>{globalNumber}</div>
      <input type='number' onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
