import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {getTodoById} from '../redux/modules/todos';

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  return (
    <DetailContainer>
      <StyledDetail>
        <StyledDetailHeader>
          <div>ID :{todo.id}</div>
          <StyledDetailButton
            borderColor='#ddd'
            onClick={() => {
              navigate('/');
            }}
          >
            이전으로
          </StyledDetailButton>
        </StyledDetailHeader>
        <StyledDetailTitle>{todo.title}</StyledDetailTitle>
        <StyledDetailBody>{todo.text}</StyledDetailBody>
      </StyledDetail>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDetail = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const StyledDetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledDetailTitle = styled.h1`
  margin: auto;
`;

const StyledDetailBody = styled.div`
  font-size: 20px;
  margin: auto;
`;

const StyledDetailButton = styled.button`
  border: 2px solid teal;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: teal;
  }
`;
