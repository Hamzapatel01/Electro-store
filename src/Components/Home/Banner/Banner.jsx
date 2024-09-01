import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Banner.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/pink_headphones.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopNow = () => {
    navigate("/products"); // Navigate to the Products page
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid first py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6 desc" data-aos="fade-right">
                  <div className="Banner_col1 pt-md-4">
                    <h1 className="title">
                      Apple <span className="words"> Wireless <br />Headphones</span>
                    </h1>
                    <p>Lorem ipsum dolor elit. Doloremque voluptatem magnam molestias ratione voluptates corporis amet id possimus animi modi suscipit veritatis, repellat tempora labore voluptas quas omnis dolor. Laborum perferendis quisquam debitis. Accusantium veniam distinctio assumenda fugit nesciunt, a placeat, animi nihil molestias sapiente consectetur doloremque ipsa, ea officia?</p>
                    <button className="buttons" onClick={handleShopNow}>
                      <div className="buynow">Shop Now</div>
                    </button>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                  <div className="Banner_col2 pt-2 imghead">
                    <img src={img1} className="img-fluid" alt="Black Headphones" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid second">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                  <div className="Banner_col2">
                    <img src={img2} className="img-fluid" alt="Pink Headphones" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 secondpara" data-aos="fade-right">
                  <div className="Banner_col1 pt-md-4">
                    <h1 className="title">
                      New <span className="words">Pink <br />Headphones</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas reiciendis reprehenderit, illo sint amet dolores maiores autem architecto officia corrupti aliquid nulla neque ad nemo praesentium odio beatae minima. Cum, at. Id, temporibus ipsa?</p>
                    <button className="buttons" onClick={handleShopNow}>
                      <div className="buynow">Shop Now</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </>
  );
};

export default Banner;
