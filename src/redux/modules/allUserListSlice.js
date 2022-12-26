import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getUserList = createAsyncThunk(
  'allUserList/getUser',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3003/allUserList');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addUserList = createAsyncThunk(
  'allUserList/addUser',
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.post(`http://localhost:3003/allUserList`, payload);

      const data = await axios.get('http://localhost:3003/allUserList');
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __updateUserList = createAsyncThunk(
  'allUserList/updateUser',
  async (payload, thunkAPI) => {
    try {
      // console.log('update 페이로드: ', payload);
      await axios.patch(
        `http://localhost:3003/allUserList/${payload.id}`,
        payload
      );
      const data = await axios.get('http://localhost:3003/allUserList');
      // console.log('update 이벤트의 서버 응답: ', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  allUserList: [
    // {
    //   id: 1,
    //   title: '제목1',
    //   content: '내용1',
    // },
  ],
  isLoading: false,
  error: null,
};

const allUserListSlice = createSlice({
  name: 'allUserList',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.allUserList = [...state.allUserList, action.payload];
    },
  },

  extraReducers: {
    [__getUserList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getUserList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.allUserList = action.payload; // Store에 있는 user에 서버에서 가져온 user를 넣습니다.
    },
    [__getUserList.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUserList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allUserList = action.payload;
    },
    [__addUserList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateUserList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allUserList = action.payload;
    },
    [__updateUserList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

console.log('userSlice.action:', allUserListSlice.actions);
export const { addUser } = allUserListSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default allUserListSlice.reducer;
