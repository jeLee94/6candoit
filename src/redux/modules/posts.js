import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getPost = createAsyncThunk(
  'posts/getPost',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  'posts/addPost',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.post(`${process.env.REACT_APP_localPosts}`, payload);
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  'posts/deletePost',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_localPosts}/${payload}`);
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __togglePost = createAsyncThunk(
  'posts/togglePost',
  //   'posts/togglepost',
  async (payload, thunkAPI) => {
    try {
      // console.log('비동기 toggle payload값:', payload);
      await axios.patch(`${process.env.REACT_APP_localPosts}/${payload.id}`, {
        isDone: !payload.isDone,
      });
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      // console.log('toggle: server로부터 받은 응답', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatePost = createAsyncThunk(
  'posts/updatePost',
  async (payload, thunkAPI) => {
    try {
      // console.log('update 페이로드: ', payload);
      await axios.patch(
        `${process.env.REACT_APP_localPosts}/${payload.id}`,
        payload
      );
      const data = await axios.get(`${process.env.REACT_APP_localPosts}`);
      // console.log('update 이벤트의 서버 응답: ', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [
    // {
    //   id: 1,
    //   title: '제목1',
    //   content: '내용1',
    // },
  ],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((posts) => posts.id !== action.payload);
    },

    togglePost: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).isDone = !postlist.find(
        (e) => e.id === action.payload
      ).isDone;
      state.posts = postlist;
    },
    toggleDisplay: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).displaytoggle =
        !postlist.find((e) => e.id === action.payload).displaytoggle;
      state.posts = postlist;
    },
    updatePost: (state, action) => {
      let postlist = state.posts.slice();
      console.log(action.payload);
      // postlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.posts = postlist;
    },
  },
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__togglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__togglePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__togglePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// console.log('postSlice.action:', postsSlice.actions);
export const { addPost, deletePost, togglePost, updatePost, toggleDisplay } =
  postsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsSlice.reducer;
