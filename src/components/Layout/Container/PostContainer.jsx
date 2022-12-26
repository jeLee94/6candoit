import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  __deletePost,
  // togglePost,
  __togglePost,
} from "../../../redux/modules/posts";
import * as S from "./PostContainerStyle";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";
import blankProfile from "../../../images/blankProfile.webp";
// import {
//   __deleteComment,
//   __deleteAllComment,
//   __getComment,
// } from '../../redux/modules/comments';
const PostContainer = ({ post }) => {
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  const createdTime = dayjs(post.created_at).fromNow();
  const DeletePost = () => {
    dispatch(__deletePost(post.id));
  };
  const { user } = useSelector((state) => state.user);
  const { allUserList } = useSelector((state) => state.allUserList);

  const togglePostHandler = () => {
    // event.preventDefault();
    dispatch(__togglePost(post));
    // console.log(dispatch(togglePost(post.id))); //동기적 기능 구현완료
  };

  const idList = allUserList.map((user) => user.id);
  const idx = idList.indexOf(user[0].invitedUid);
  // console.log(allUserList[idx]);
  return (
    <S.BoxWrap>
      <Link
        to={`/${post.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <S.ContentsWrap>
          <S.CreatedAtWrap>
            {createdTime}
            {user?.length > 0 && (
              <S.UserDiv>
                <S.UserProfile src={user?.[0]?.photoURL ?? blankProfile} />
                {allUserList?.[idx] ? (
                  <S.UserProfile
                    src={allUserList?.[idx]?.photoURL ?? blankProfile}
                  />
                ) : (
                  <span></span>
                )}
              </S.UserDiv>
            )}
          </S.CreatedAtWrap>

          {/* <S.UserImgView src={post?.imgUrl} /> */}
          {/* <S.UserNameWrap>{post.userName}</S.UserNameWrap> */}
          <S.TitleWrap>
            {post.title.length > 20
              ? post.title.substr(0, 20) + "..."
              : post.title}
          </S.TitleWrap>
          <S.ContentWrap>
            {post.content.length > 25
              ? post.content.substr(0, 25) + "..."
              : post.content}
          </S.ContentWrap>
        </S.ContentsWrap>
      </Link>
      <S.ContentWrap>
        <S.ButtonWrap>
          <S.CusttomButton onClick={DeletePost}>삭제</S.CusttomButton>
          <S.CusttomButton onClick={togglePostHandler}>
            {post.isDone ? "진행중" : "완료"}
          </S.CusttomButton>
        </S.ButtonWrap>
      </S.ContentWrap>
    </S.BoxWrap>
  );
};

export default PostContainer;
