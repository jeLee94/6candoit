import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SidebarStyle.js";
import Ellipse from "./Ellipse.png";
import MainPage from "../Container/PostsContainer";

export default function Sidebar() {
  return (
    <>
      <S.SideBar>
        {/* S.SideBar 처럼 다른 태그들도 styled-component로 변경 부탁드립니다! */}
        {/* styled-component 이름은 PascalCase 형태로 부탁드려요! */}
        <S.SideWrapper>
          <S.AppLogo src={Ellipse} />
          <S.SideTitle>MENU</S.SideTitle>
          <S.SideMenu>
            <Link to="/">
              <span>Main</span>
            </Link>
          </S.SideMenu>
        </S.SideWrapper>
      </S.SideBar>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>My Todos</h2>
          </S.Header>
          <MainPage />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
