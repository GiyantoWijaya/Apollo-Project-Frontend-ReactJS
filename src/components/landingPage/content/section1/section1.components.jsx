import NavbarLandingPage from "../../navbar/navbarLandingPage.components";
import CarouselComponent from "../../carousel/carousel.component";

import "./section1.styles.css";

const Section1 = () => {
  return (
    <div className="bg1">
      <NavbarLandingPage />
      <div className="container content-main">
        <div className="row">
          <div className="content col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
            <h1 className="h1title text-center">Appollo Project</h1>
            <h5 className="description">
              Welcome to ApolloGames, the premier online destination for Rock,
              Paper, Scissors enthusiasts! <br />
              <br />
              Join our friendly community to connect with fellow players,
              discuss strategies, and share triumphs. Whether you're a nostalgic
              fan or a newcomer, ApolloGames is your go-to platform for
              thrilling one-on-one matches against the computer.
              <br />
              <br /> Join us today and rediscover the joy of Rock, Paper,
              Scissors!
            </h5>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6 imgcarousel">
            <CarouselComponent />
          </div>
        </div>
      </div>
      <div className="footer col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h5 className="text-center">
          &copy; Apollo-challange-chapter-9-Project
        </h5>
      </div>
    </div>
  );
};

export default Section1;
