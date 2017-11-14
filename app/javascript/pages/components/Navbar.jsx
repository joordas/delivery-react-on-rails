import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { styles } from "../../style-variables";

const Wrapper = styled.div`
  height: 40px;
  padding: 1.25rem 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  flex: 1;
  background-color: white;
  width: calc(100vw - 2*(1.875rem));
`;

const Logo = styled(Link)`
  color: ${props => (props.whitelogo ? "white" : styles.colors.mainBlue)};
  margin: 0;
  font-family: ${styles.fonts.lato};
  font-size: 1.625rem;
  text-decoration: none;
  font-weight: 700;
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLink = styled.li`
  color: ${styles.colors.lightGrey};
  font-family: ${styles.fonts.lato};
  font-size: 1.125rem;
  padding: 0 1.375rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const NavbarLinks = props => {
  if (props.user) {
    return (
      <Nav>
        <NavLink href="/">
          <NavbarLink>Favorites</NavbarLink>
        </NavLink>
        <NavLink href="/">
          <NavbarLink>My orders</NavbarLink>
        </NavLink>
        <NavLink href="/">
          <NavbarLink>Help</NavbarLink>
        </NavLink>
        <NavLink href="/">
          <NavbarLink>
            <Avatar src={props.user.photoUrl} alt="" />
          </NavbarLink>
        </NavLink>
      </Nav>
    );
  }
  return (
    <Nav>
      <a href="/users/sign_up">
        <NavbarLink>Sign up</NavbarLink>
      </a>
      <a href="/users/sign_in">
        <NavbarLink>Login</NavbarLink>
      </a>
      <a data-method="delete" href="/users/sign_out">
        <NavbarLink>Sign Out</NavbarLink>
      </a>
    </Nav>
  );
};

class Navbar extends Component {
  componentDidMount() {
    const { id } = JSON.parse(document.getElementById("app").dataset.userid);

    window.addEventListener("scroll", this.handleScroll);
    if (id) {
      const user = fetch(`/api/users/${id}`);
      console.log(user); //finish later : I think it doesnt let me get the user from the API cause of authentication issues.
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const navBar = document.querySelector(".navbar");
    const scroll = window.scrollY;
    if (scroll > 0) {
      navBar.classList.add("fixed");
    } else if (scroll === 0) {
      navBar.classList.remove("fixed");
    }
  }
  render() {
    return (
      <Wrapper className="navbar">
        <Logo whitelogo={this.props.whitelogo} to="/">
          Cayliv
        </Logo>
        <NavbarLinks user={this.props.user} />
      </Wrapper>
    );
  }
}

// Navbar.defaultProps = {
//   user: {
//     photoUrl: "https://avatars3.githubusercontent.com/u/25730606?s=400&v=4"
//   }
// };

export default Navbar;
