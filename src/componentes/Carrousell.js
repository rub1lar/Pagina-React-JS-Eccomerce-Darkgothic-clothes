import Carousel from 'react-bootstrap/Carousel';

function Carrousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/banner.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>LOS MEJORES PRECIOS</h3>
          <p>NoMercy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/banner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>LAS MEJORES OFERTAS</h3>
          <p>NoMercy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/banner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Solo en No Mercy</h3>
          <p>NoMercy</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousell;




