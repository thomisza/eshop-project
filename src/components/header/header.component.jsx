import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from '../../redux/user/user.action'

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className="header">
      <div className="logo-container" to="/">
        <Logo className="logo" />
      </div>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>SIGN OUT</div>
        ) : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
