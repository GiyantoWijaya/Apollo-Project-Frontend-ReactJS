import { Navbar, Nav } from "rsuite";
import PeoplesCostomizeIcon from "@rsuite/icons/PeoplesCostomize";
import PageEndIcon from "@rsuite/icons/PageEnd";

import "./navbarLandingPage.styles.css";

const NavbarLandingPage = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">APOLLO PROJECT</Navbar.Brand>

      <Nav appearance="tabs">
        <div className="mx-5 text-center">
          {/* <Nav.Item icon={<HomeIcon />} href="/">
            <span className="mx-5">Home</span>
          </Nav.Item> */}
          <Nav.Item href="#news">
            <span className="mx-5">News</span>
          </Nav.Item>
          <Nav.Item href="/gamedetail">
            <span className="mx-5">Leaderboard</span>
          </Nav.Item>
        </div>
      </Nav>

      <Nav pullRight>
        <Nav.Item href="/register" icon={<PeoplesCostomizeIcon />}>
          Sign-Up
        </Nav.Item>
        <span className="mx-3">
          <Nav.Item href="/login" icon={<PageEndIcon />}>
            Login
          </Nav.Item>
        </span>
      </Nav>
    </Navbar>
  );
};

export default NavbarLandingPage;
