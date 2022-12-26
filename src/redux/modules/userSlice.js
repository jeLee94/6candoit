import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getUser = createAsyncThunk(
  'user/getUser',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3003/user');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addUser = createAsyncThunk(
  'user/addUser',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.post(`http://localhost:3003/user`, payload);

      const data = await axios.get('http://localhost:3003/user');
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.delete(`http://localhost:3003/user/${payload[0].id}`);
      const data = await axios.get('http://localhost:3003/user');
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __updateUser = createAsyncThunk(
  'user/updateUser',
  async (payload, thunkAPI) => {
    try {
      console.log('update 페이로드: ', payload);
      await axios.patch(`http://localhost:3003/user/${payload.id}`, payload);
      const data = await axios.get('http://localhost:3003/user');
      // console.log('update 이벤트의 서버 응답: ', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: [
    // {
    //   id: 1,
    //   title: '제목1',
    //   content: '내용1',
    // },
  ],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },

    deleteUser: (state, action) => {
      state.user = state.user.id !== action.payload;
    },
  },

  extraReducers: {
    [__getUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.user = action.payload; // Store에 있는 user에 서버에서 가져온 user를 넣습니다.
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__addUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__updateUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// console.log('userSlice.action:', userSlice.actions);
export const { addUser, deleteUser } = userSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default userSlice.reducer;
