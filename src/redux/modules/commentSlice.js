import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getComment = createAsyncThunk(
  "comment/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/comment");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "comment/addComment",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.post(`http://localhost:3003/comment`, payload);

      const data = await axios.get("http://localhost:3003/commnet");
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3003/comment/${payload}`);
      const data = await axios.get("http://localhost:3003/comment");
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "comment/updateComment",
  async (payload, thunkAPI) => {
    try {
      // console.log('update 페이로드: ', payload);
      await axios.patch(`http://localhost:3003/comment/${payload}`, payload);
      const data = await axios.get("http://localhost:3003/comment");
      // console.log('update 이벤트의 서버 응답: ', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

////////////////////////////////////////////////////////////

const initialState = {
  comments: [
    // {
    //   id: 1,
    //   title: '제목1',
    //   content: '내용1',
    // },
  ],
  isLoading: false,
  error: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    updateComment: (state, action) => {
      let commnetlist = state.comments.slice();
      console.log(action.payload);
    },
  },

  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 user에 서버에서 가져온 user를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment, deleteComment, updateComment } =
  commentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentSlice.reducer;
