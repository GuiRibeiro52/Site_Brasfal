import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import img1 from '../assets/suporteteste.png'
import img2 from '../assets/suporteteste.png'
import img3 from '../assets/suporteteste.png'
import img4 from '../assets/suporteteste.png'
import img5 from '../assets/suporteteste.png'
import img6 from '../assets/suporteteste.png'
import img7 from '../assets/suporteteste.png'
import img8 from '../assets/suporteteste.png'
import img9 from '../assets/suporteteste.png'
import img10 from '../assets/suporteteste.png'
import img11 from '../assets/suporteteste.png'
import img12 from '../assets/suporteteste.png'
import img13 from '../assets/suporteteste.png'
import img14 from '../assets/suporteteste.png'
import img15 from '../assets/suporteteste.png'
import img16 from '../assets/suporteteste.png'
import img17 from '../assets/suporteteste.png'
import img18 from '../assets/suporteteste.png'
import img19 from '../assets/suporteteste.png'
import img20 from '../assets/suporteteste.png'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2"> 
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
