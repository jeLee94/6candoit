import React from 'react';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import BoardHeader from '../../components/Layout/BoardHeader/BoardHeader';
// import PostsContainer from '../../components/Layout/Container/PostsContainer';

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <BoardHeader />
      {/* <PostsContainer /> */}
    </>
  );
}
