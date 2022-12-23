import React from "react";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Todo from "../../components/Layout/Todo/Todo";
// import PostsContainer from '../../components/Layout/Container/PostsContainer';

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <Todo />
      {/* <PostsContainer /> */}
    </>
  );
}
