import { Carousel } from "rsuite";

const CarouselComponent = () => {
  return (
    <Carousel autoplay className="custom-slider">
      <img src="/img/3.jpg" height="250" alt="img1" />
      <img src="/img/2.jpg" height="250" alt="img2" />
      <img src="/img/1.jpg" height="250" alt="img3" />
    </Carousel>
  );
};

export default CarouselComponent;
