// src/redux/modules/config/configStore.js

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import posts from '../modules/posts';
import comments from '../modules/comments';
import userSlice from '../modules/userSlice';
import allUserListSlice from '../modules/allUserListSlice';

/**
 * 모듈(Slice)이 여러개인 경우
 * 추가할때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
 *
 * 아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos 기능이 모두 있고,
 * 이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것 입니다.
 */
const store = configureStore({
  reducer: {
    posts: posts,
    comments: comments,
    user: userSlice,
    allUserList: allUserListSlice,
  },
  middleware: [thunk],
  // 다음이 middleware 추가 코드이다.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
  // devTools: true,
});

export default store;
