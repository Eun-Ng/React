import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteTodo, toggleStatusTodo} from '../../redux/modules/todos';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <ListContainer>
      <WorkingTitle>Working 🔥</WorkingTitle>
      <ListWorking>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoCard key={todo.id}>
                <TodoContent>
                  <h3 className='todo-title'>{todo.title}</h3>
                  <div>{todo.text}</div>

                  <ButtonSet>
                    <TodoDeleteButton onClick={() => onDeleteTodo(todo.id)}>
                      삭제하기
                    </TodoDeleteButton>
                    <TodoCompleteButton
                      onClick={() => onToggleStatusTodo(todo.id)}
                    >
                      {todo.isDone === false ? '완료' : '취소'}
                    </TodoCompleteButton>
                  </ButtonSet>
                  <StyledLink to={`/${todo.id}`} key={todo.id}>
                    상세보기
                  </StyledLink>
                </TodoContent>
              </TodoCard>
            );
          } else {
            return null;
          }
        })}
      </ListWorking>
      <DoneTitle>Done 😃</DoneTitle>
      <ListDone>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoCard key={todo.id}>
                <TodoContent>
                  <h3 className='todo-title'>{todo.title}</h3>
                  <div>{todo.text}</div>

                  <ButtonSet>
                    <TodoDeleteButton onClick={() => onDeleteTodo(todo.id)}>
                      삭제하기
                    </TodoDeleteButton>
                    <TodoCompleteButton
                      onClick={() => onToggleStatusTodo(todo.id)}
                    >
                      {todo.isDone === false ? '완료' : '취소'}
                    </TodoCompleteButton>
                  </ButtonSet>
                  <StyledLink to={`/${todo.id}`} key={todo.id}>
                    상세보기
                  </StyledLink>
                </TodoContent>
              </TodoCard>
            );
          } else {
            return null;
          }
        })}
      </ListDone>
    </ListContainer>
  );
};

export default List;

// List
const ListContainer = styled.div`
  padding: 0 24px;
  box-sizing: border-box;
`;

const ListWorking = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 270px;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ListDone = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 270px;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const WorkingTitle = styled(Title)``;
const DoneTitle = styled(Title)``;

// Card
const TodoCard = styled.div`
  min-width: 200px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const TodoContent = styled.div`
  margin: auto;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const TodoDeleteButton = styled(Button)`
  border: 2px solid red;
  background-color: #fff;

  :hover {
    background-color: red;
    color: white;
  }
`;

const TodoCompleteButton = styled(Button)`
  border: 2px solid green;
  background-color: #fff;

  :hover {
    background-color: green;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-top: 15px;
  margin-bottom: -10px;
  font-size: 20px;

  :hover {
    color: teal;
  }
`;
