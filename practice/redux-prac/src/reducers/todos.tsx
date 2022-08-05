enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface Action {
  type: ActionType;
  text: string;
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state; // 위의 케스 아닐경우 스테이트 반환
  }
};

export default todos;
