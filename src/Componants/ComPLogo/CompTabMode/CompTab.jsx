import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CLogo from "../../../Common/CompanyLogo/CLogo";
import { Images } from "../../../Contant/ImagePath";
const CompTab = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={40}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 400,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp1_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp2_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp3_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp4_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp5_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp6_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp7_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp8_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp9_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp10_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp11_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp12_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp13_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp14_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp15_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp16_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp17_LOGO} />
        </SwiperSlide>
        <SwiperSlide>
          <CLogo CompLogo={Images.Comp18_LOGO} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CompTab;
