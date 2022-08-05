interface Action {
  type: string;
}

const counter = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state; // 위의 케스 아닐경우 스테이트 반환
  }
};

export default counter;
