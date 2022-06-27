import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [title, titleChange] = useState([
    '깃허브 다루는 법',
    '타입스크립트 독학',
    '리액트 독학',
  ]);
  let [like, likePlus] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>React Blog</div>
      </div>

      {title.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {title[i]}
            </h4>
            <div className='infoGroup'>
              <span
                className='likeClick'
                onClick={() => {
                  let copy = [...like];
                  copy[i] = like[i] + 1;
                  likePlus(copy);
                }}
              >
                👍🏻 {like[i]}
              </span>

              <p>6월 2일 발행</p>
            </div>
          </div>
        );
      })}

      {modal === true ? <Modal color={'skyblue'} title={title} /> : null}

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

const Modal = (props) => {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
};

export default App;
