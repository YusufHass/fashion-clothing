import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import { ReactComponent as FashionClothingLogo } from "../../asset/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Shop from "../shop/shop.component";
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  //currentUser is distructured from the UserContext component which
  //the value is set inside sign-in component using setCurrentUser
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FashionClothingLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* when the current user is sign-in then display the sigh-in 
          otherwise display the sign-out text */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon/>
        </div>
        <CardDropDown/>
      </div>
      {/* Outlet displays the rest routing after the above text */}
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
