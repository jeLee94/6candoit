import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
// import Header from '../components/Layout/Header';
import Main from "../pages/Mainpage/Main";
import PostAddForm from "../pages/PostAddPage/PostAddForm";
// import PostsContainer from './pages/PostListPage/PostsContainer';
// import PostAddForm from '../pages/PostAddPage/PostAddForm';
// import Postpage from './pages/PostPage/Postpage';
// import PostEditForm from './pages/PostEditPage/PostEditForm';

const Wrap = styled.div`
  max-width: 96.25rem;
  max-height: 56.25rem;
  height: 95vh;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  width: 96rem;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Wrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/addform" element={<PostAddForm />} />
          {/* <Route path='/editform' element={<PostEditForm />} /> */}
          {/* <Route path='/:id' element={<Postpage />} /> */}
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
};

export default Router;
