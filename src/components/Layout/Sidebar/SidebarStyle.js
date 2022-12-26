import styled from 'styled-components';

export const SideBar = styled.div`
  width: 13.75rem;
  height: 100%;
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SideBarLogo = styled.img`
  /* object-fit: contain; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 5px;
  /* border-radius: 100px; */
  /* margin: 50px auto 10px auto; */
`;
export const SideLogin = styled.div`
  font-size: medium;
  font-weight: bold;
`;

export const SideTitle = styled.div`
  font-size: 20px;
  margin: 1.5rem 0 30px 1rem;
  font-weight: 700;
  color: #3a8bfe;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.0625rem;
  margin-left: 1rem;
  font-size: 20px;
  color: #696969;
`;

export const SideWrapper = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 2.25rem 0;
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 1.875rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.125rem 4.375rem;
  flex-grow: 1;
  overflow: auto;
  background-color: #f6f8fb;
`;

export const AppLogo = styled.img`
  width: 100px;
  height: 100px;
  overflow: hidden;
  background-size: cover;
  border-radius: 100px;
  margin: 50px auto 10px auto;
`;

export const MenuList = styled.div`
  margin-bottom: 30px;
`;
