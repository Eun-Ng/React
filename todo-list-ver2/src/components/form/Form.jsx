import {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import uuid from 'react-uuid';
import {addTodo} from '../../redux/modules/todos';

const Form = () => {
  const id = 'id' + uuid().slice(0, 3);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: '0',
    title: '',
    text: '',
    isDone: false,
  });

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name]: value});
  };

  const onSubmitHandler = (e) => {
    // e.preventDefault();

    if (todo.title === '' || todo.text === '') {
      return alert('empty!');
    } else {
      dispatch(addTodo({...todo, id}));
      setTodo({
        id: '0',
        title: '',
        text: '',
        isDone: false,
      });
    }

    console.log(todo);
  };

  return (
    <AddForm>
      <InputGroup>
        <p className='title'>제목</p>
        <input
          type='text'
          name='title'
          value={todo.title}
          onChange={onChangeHandler}
        />
        <p className='content'>내용</p>
        <input
          type='text'
          name='text'
          value={todo.text}
          onChange={onChangeHandler}
        />
      </InputGroup>
      <AddButton onClick={onSubmitHandler}>추가하기</AddButton>
    </AddForm>
  );
};

export default Form;

// styled-components
const AddForm = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    width: 200px;
    height: 20px;
    padding: 15px 10px;
    font-size: 15px;
    font-weight: 600;
    background-color: lightgray;
    border: none;
    border-radius: 10px;
  }
  input:focus-visible {
    outline: solid teal 2px;
  }
`;

const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
