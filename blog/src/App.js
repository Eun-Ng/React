import './App.css';
import {useState} from 'react';

function App() {
  const [title, titleChange] = useState([
    '깃허브 다루는 법',
    '타입스크립트 독학',
    '리액트 독학',
  ]);
  const [like, likePlus] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [nowTitle, setNowTitle] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [date, setDate] = useState([]);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>React Blog</div>
      </div>

      {title.map((a, i) => {
        // 날짜
        const nowDay = new Date();
        const nowMonth = nowDay.getMonth() + 1;
        const nowDate = nowDay.getDate();
        let copyDate = [...date];
        copyDate = [nowMonth, nowDate];

        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setNowTitle(i);
              }}
            >
              {title[i]}
            </h4>
            <div className='infoGroup'>
              <span
                className='likeClick'
                onClick={() => {
                  const copy = [...like];
                  copy[i] = like[i] + 1;
                  likePlus(copy);
                }}
              >
                👍🏻 {like[i]}
              </span>
              <p className='date'>
                {copyDate[0]}월 {copyDate[1]}일 발행
              </p>
            </div>
            <button
              className='delBtn'
              onClick={() => {
                const copyTitle = [...title];
                copyTitle.splice(i, 1);
                titleChange(copyTitle);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <div className='inputGroup'>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            if (inputVal === '') {
              alert('빈 제목은 불가능합니다!');
            } else {
              // 글 추가
              const copyTitle = [...title];
              copyTitle.unshift(inputVal);
              titleChange(copyTitle);

              // 글 추가시 좋아요 요소 또한 추가
              const copyLike = [...like];
              copyLike.unshift(0);
              likePlus(copyLike);
            }
          }}
        >
          글 추가
        </button>
      </div>

      {modal === true ? (
        <Modal title={title} nowTitle={nowTitle} titleChange={titleChange} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.title[props.nowTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      <button
        onClick={() => {
          const copyTitle = [...props.title];
          copyTitle[0] = '깃허브로 협업하기';
          props.titleChange(copyTitle);
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          const copyTitle = [...props.title];
          copyTitle.sort();
          props.titleChange(copyTitle);
        }}
      >
        글 정렬
      </button>
    </div>
  );
};

export default App;
