import { Link } from "react-router-dom";
import { Button } from "../components/button";
import styled from "styled-components";

const StyledHeader = styled.div`
  transition: width, 0.3s;
  position: relative;
  display: flex;
  height: 60px;
  min-height: 60px;
  box-shadow: 1px 1px 4px #9aa0b9;
  align-items: center;
  flex-direction: column;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="d-flex p-2 justify-content-between container-fluid">
        <button
          className="navbar-toggler float-start align-self-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSidebar"
          aria-expanded="true"
          aria-controls="collapseSidebar"
        >
          <img src="/images/menu.png" width="30" alt="<<" />
        </button>
        <Link className="navbar-brand align-self-center" to="/home">
          Navbar Logo
        </Link>

        <div className="dropdown float-end">
          <Button
            className="btn btn-standard border-0 rounded-3 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            show="ture"
          >
            Dropdown button
          </Button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                登出
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export { Header };
