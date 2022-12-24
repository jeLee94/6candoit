import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./PostsContainerStyle";

const CommentContaier = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <S.Form onSubmit={onSubmitHandler}>
        <label>
          제목
          <S.TitleInput
            className="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          내용
          <S.ContentInput
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </label>
        <S.AddTodoBtn disabled={title === "" || content === "" ? true : false}>
          추가
        </S.AddTodoBtn>
      </S.Form>

      <S.DoingTodo>
        <S.DoneTitle>Doing</S.DoneTitle>
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) => user[0].id === post.userId && post.isDone === false
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoingTodo>
    </>
  );
};

export default CommentContaier;
