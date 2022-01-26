import { Header } from "../components/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const StyledLayout = styled.div`
  height: 100vh;
  flex-direction: row;
  min-height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  overflow: auto;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Home = () => {
  return (
    <>
      <StyledLayout>
        <Sidebar />
        <StyledContent>
          <Header />
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default Home;
