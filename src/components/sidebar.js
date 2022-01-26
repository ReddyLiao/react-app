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
            <Link class="navbar-brand m-0" to="/home">
              Logo
            </Link>
          </div>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              帳號管理
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              <i className="fas fa-users"></i> 用戶管理
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              訂單管理
            </Link>
          </NavitemStyle>
          <NavitemStyle className="py-3 mx-auto">
            <Link className="px-5 py-3 rounded-3" to="/home">
              系統管理
            </Link>
          </NavitemStyle>
        </div>
      </SidebarStyle>
    </div>
  );
};

export default Sidebar;
