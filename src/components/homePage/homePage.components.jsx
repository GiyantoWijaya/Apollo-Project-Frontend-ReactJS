import React from "react";

import Container from "react-bootstrap/Container";

import Cookies from "js-cookie";

const HomePage = () => {
  const username = Cookies.get("username");
  return (
    <div className="myDiv">
      {/* <NavigationBar /> */}
      <Container className="p-3 mt-5">
        <h3>Welcome, {username} 😃</h3>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          accusantium omnis, pariatur obcaecati a cumque vero ea ipsam dicta.
          Quaerat quos in illo quae atque dolorem esse nisi repudiandae!
        </h2>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
