import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
    <div>
      <nav>
        <ul>
          <div className="home-link" key="home-button">
            <Link to="/" className="link-styles">
              Home
            </Link>
            <Link to={`/CreateChampion`} className="link-styles">
              Create Champion
            </Link>
            <Link to={`/ViewChampion`} className="link-styles">
              View Champions
            </Link>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
    </>
  );
};

export default Layout;