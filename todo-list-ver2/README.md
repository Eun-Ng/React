- ToDo List ver.2
- 기간: 2022.08.02 ~
- 사용기술: CRA, React, React Hooks, Redux, Styled-components, React-router-dom
- 폴더 구조

```
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── components
  │   ├── form
  │   │   └── Form.jsx
  │   ├── list
  │   │   └── List.jsx
  │   └── ui
  │   ├── Header.jsx
  │   └── Layout.jsx
  ├── index.js
  ├── pages
  │   ├── Detail.jsx
  │   └── Main.jsx
  ├── redux
  │   ├── config
  │   │   └── configStore.js
  │   └── modules
  │   └── todos.js
  └── router
  └── Router.jsx
```

- 컴포넌츠를 나눈 기준
  - ui 요소는 ui 폴더에 분류
  - form과 list는 묶기가 좀 애매해서 각자 폴더에 분류
  - pages 폴더에 라우팅 되는 페이지들 분류
  - redux 폴더에 confing, modules 분류
  - router 폴더에 라우터 분류
