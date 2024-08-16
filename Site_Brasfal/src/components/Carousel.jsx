import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import img1 from '../../public/products/pr200-01.png'
import img2 from '../../public/products/pr300-01.png'
import img3 from '../../public/products/pr400-01.png'
import img4 from '../../public/products/pr500-01.png'


const images = [
  img1, img2, img3, img4
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[250px] rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
