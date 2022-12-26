import React, { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { __addPost, __getPost } from "../../../redux/modules/posts";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import * as S from "./PostsContainerStyle";
import dayjs from "dayjs";
import blankProfile from "../../../images/blankProfile.webp";
import { auth } from "../../../firebase";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState(blankProfile);
  const [imgDownloadUrl, setImagDownloadUrl] = useState(null);
  // const [imgUploaded, setImgUploaded] = useState(false);
  // const [user, setUser] = useState('anonymous');
  // console.log('2', imgDownloadUrl);

  //task 추가 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === "" || content === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    // console.log('imgUrl값은?', imgUrl);
    // console.log(user[0].invitedUid);
    user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
      ? dispatch(
          __addPost({
            userName: auth.currentUser
              ? auth.currentUser.displayName
              : user[0].email.split("@")[0],
            created_at: dayjs().format("YYYY.MM.DD HH:mm:ss"),
            id: uuid(),
            title,
            content,
            isDone: false,
            userId: user[0].id,
            imgUrl: imgDownloadUrl ?? blankProfile,
            invitedId: user[0].invitedUid ?? "",
          })
        )
      : alert("로그인해주세요");

    setTitle("");
    setContent("");
    navigate("/");
  };

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  // console.log('posts: ', posts);
  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    posts.map((post) => setImgUrl(post.imgUrl));
  }, [posts]);

  // console.log(auth.currentUser?.photoURL);

  return (
    <S.CommentsWrap>
      <S.AddWrap>
        <S.WriteTitle>Write down what to do</S.WriteTitle>

        <S.Form onSubmit={onSubmitHandler}>
          {/* {userName} */}
          <S.TitleCommentText>제목</S.TitleCommentText>
          <S.TitleInput
            className="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <S.TitleCommentText>내용</S.TitleCommentText>

          <S.ContentInput
            cols="30"
            rows="10"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <S.AddBtn disabled={title === "" || content === "" ? true : false}>
            추가
          </S.AddBtn>
        </S.Form>
      </S.AddWrap>

      <S.DoingTodo>
        <S.DoneTitle>Doing</S.DoneTitle>
        {/* <div style={{ marginBottom: 10 }}>Doing</div> */}
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) =>
                  (user[0].id === post.userId ||
                    user[0].id === post.invitedId) &&
                  post.isDone === false
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoingTodo>

      <S.DoneTodo>
        {/* <S.DoneTitle>Done</S.DoneTitle> */}

        <S.DoneTitle>Done</S.DoneTitle>

        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) =>
                  (user[0].id === post.userId ||
                    user[0].id === post.invitedId) &&
                  post.isDone === true
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoneTodo>
    </S.CommentsWrap>
  );
};

export default PostsContainer;
