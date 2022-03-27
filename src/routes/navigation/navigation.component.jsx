import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'
import { ReactComponent as FashionClothingLogo } from "../../asset/crown.svg";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FashionClothingLogo className="logo"/>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      {/* Outlet displays the rest routing after the above text */}
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
