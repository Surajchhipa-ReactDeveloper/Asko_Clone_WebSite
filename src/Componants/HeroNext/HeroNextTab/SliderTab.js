import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./StyleHero.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import BigComp from "../../../Common/Big-Three/BigThree";
import { Images } from "../../../Contant/ImagePath";

const BigSliderTab = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BigComp
            BigImg={Images.Big1_LOGO}
            IconText={
              "More than 8 crore Indians trust Acko for their insurance needs"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BigComp
            BigImg={Images.Big2_LOGO}
            IconText={
              "3 out of 4 customers renew their car insurance policy with us"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BigComp
            BigImg={Images.Big3_LOGO}
            IconText={
              "We have happy ACKO customers in 647 cities & towns across India"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default BigSliderTab;
