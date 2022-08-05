import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);

store.dispatch({
  type: 'ADD_TODO',
  text: 'USE REDUX',
});

console.log('store.getState: ', store.getState());

const render = () =>
  root.render(
    <React.StrictMode>
      {/* getState() 애플리케이션의 현재 상태 트리를 반환. 리듀서가 반환한 마지막 값과 동일함. props로 내려줌 */}
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />
      </Provider>
    </React.StrictMode>
  );

render(); // 함수 콜
store.subscribe(render); // 스토어를 구독해 state 변경시 마다 render

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
