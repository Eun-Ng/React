import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const post = '강남 우동 맛집';
  let [title, titleChange] = useState([
    '깃허브 다루는 법',
    '타입스크립트 독학',
    '리액트 독학',
  ]);
  let [like, likePlus] = useState(0);
  // let [modal, setModal] = useState(false);
  let [modalCounter, setModalCounter] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>React Blog</div>
      </div>
      <div className='list'>
        <h4>
          {title[0]}{' '}
          <span
            class='likeClick'
            onClick={() => {
              likePlus(like + 1);
            }}
          >
            👍🏻
          </span>{' '}
          {like}
        </h4>
        <p>6월 2일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>6월 2일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            {
              // setModal(true);
              setModalCounter(modalCounter + 1);
            }
          }}
        >
          {title[2]}
        </h4>
        <p>6월 2일 발행</p>
      </div>
      {/* {modal === true ? <Modal /> : null} */}
      {modalCounter % 2 === 0 ? null : <Modal />}
      <button
        onClick={() => {
          let copyTitle = [...title];
          copyTitle.sort();
          titleChange(copyTitle);
        }}
      >
        정렬
      </button>
      <button
        onClick={() => {
          let copyTitle = [...title];
          copyTitle[0] = '깃허브로 협업하기';
          titleChange(copyTitle);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
