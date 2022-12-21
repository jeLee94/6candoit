import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import Header from '../components/Layout/Header';
import PostsContainer from '../pages/PostListPage/PostsContainer';
import PostAddForm from '../pages/PostAddPage/PostAddForm';
// import PostsContainer from './pages/PostListPage/PostsContainer';
// import PostAddForm from '../pages/PostAddPage/PostAddForm';
// import Postpage from './pages/PostPage/Postpage';
// import PostEditForm from './pages/PostEditPage/PostEditForm';

const Wrap = styled.div`
  width: 70%;
  min-width: 500px;
  margin: 100px auto;
  display: flex;
`;

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Wrap>
        <Routes>
          <Route path='/' element={<PostsContainer />} />
          <Route path='/addform' element={<PostAddForm />} />
          {/* <Route path='/editform' element={<PostEditForm />} /> */}
          {/* <Route path='/:id' element={<Postpage />} /> */}
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
};

export default Router;
