import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarStyle = styled.div`
  position: relative;
  display: block;
  width: 280px;
  min-width: 280px;
  transition: width, left, right, 0.3s;
`;

const NavitemStyle = styled.div`
  a {
    font-size: 22px;
    color: white;
    text-decoration: none;
    &:hover {
      color: #297380;
      height: 50px;
      background-color: #d8d5f1;
      text-decoration: none;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;
    }
  }
`;

const Sidebar = () => {
  return (
    <div
      className="collapse collapse-horizontal show bg-indigo"
      id="collapseSidebar"
    >
      <SidebarStyle>
        <div className="d-flex px-4 py-4 flex-column">
          <div className="py-1 mx-auto">
            {/* <Link class="navbar-brand m-0" to="/home">
              LOGO
            </Link> */}
          </div>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              HOME
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              USERS
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              ORDERS
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              SETTING
            </Link>
          </NavitemStyle>
        </div>
      </SidebarStyle>
    </div>
  );
};

export default Sidebar;
