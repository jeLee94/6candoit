import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addPost } from "../redux/modules/posts";
import blankProfile from "../images/blankProfile.webp";
import { auth } from "../firebase";
import uuid from "react-uuid";
import dayjs from "dayjs";

export const usePostCreate = (initialValue) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);
  const [imgUrl, setImgUrl] = useState(initialValue.imgUrl);
  const [imgDownloadUrl, setImagDownloadUrl] = useState(
    initialValue.imgDownloadUrl
  );

  // let isDateRange = new Date();
  // const [range, setRange] = useState(isDateRange);
  // const [fromDate, setFromDate] = useState("");
  // const [toDate, setToDate] = useState("");

  const changeTitle = (e) => {
    // e.preventDefault();
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    // e.preventDefault();
    setContent(e.target.value);
  };
  function getFormatDate(date) {
    let year = date.getFullYear(); //yyyy
    let month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : "0" + month; //month 두자리로 저장
    let day = date.getDate(); //d
    day = day >= 10 ? day : "0" + day; //day 두자리로 저장
    return year + "" + month + "" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  //task 추가 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === "" || content === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

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
            // 캘린더 to, from 값 추가
            fromDate: getFormatDate(initialValue.fromDate),
            toDate: getFormatDate(initialValue.toDate),
          })
        )
      : alert("로그인해주세요");

    setTitle("");
    setContent("");
    navigate("/");
  };

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    if (posts) {
      posts.map((post) => setImgUrl(post.imgUrl));
    }
  }, [posts]);

  return [
    { title, content, imgUrl, imgDownloadUrl },
    changeTitle,
    changeContent,
    onSubmitHandler,
  ];
};
