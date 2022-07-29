import './App.css';

function App() {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px, 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none',
    };
  };

  const todoData = [
    {
      id: 1,
      title: '공부하기',
      completed: true,
    },
    {
      id: 2,
      title: '청소하기',
      completed: false,
    },
  ];

  return (
    <div className='App'>
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {todoData.map((data) => (
            <div style={getStyle()} key={data.id}>
              <input type='checkbox' defaultChecked={false} />
              {data.title}
              <button style={btnStyle}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
