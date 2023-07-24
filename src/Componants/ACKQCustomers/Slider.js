import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import "./style.css";
import { Autoplay, Pagination } from "swiper/modules";
import ACkoSlider from "../ACKQCustomers/Acqo";
import { Images } from "../../Contant/ImagePath";

const Slot = () => {
  return (
    <>
      <Swiper
        slidesPerView={3} // Set the number of slides to display at once
        spaceBetween={30}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          speed: 2000,
          effect: "slide",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="SLiderDiv">
          <ACkoSlider
            CusImg={Images.Cus1_LOGO}
            CusName={"CA. SAURABH SHARMA"}
            CusID={"@casaurabh7"}
            CusText={
              "@AckoInsurance Really got a very pleasant experience whether it was a claim lodgement, surveyor appointment and finally payment settlement. Thanks team @AckoInsurance again"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus2_LOGO}
            CusName={"RANJITH"}
            CusID={"@ranjithkp12"}
            CusText={
              "I have been an @AckoInsurance customer two years. The experience was fantastic, very easy to buy, simple to use website, no hollow or hidden sales pitch. I am sure you guys will rock and redefine this sector. All the best👏"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus3_LOGO}
            CusName={"KARAN YADAV"}
            CusID={"@karanyadav21"}
            CusText={
              "So just renewed my car insurance with @AckoInsurance. First year I had paid 30K to another company, then when I switched to Acko, I paid 15K in 2018, 8K in 2019 and today I have just paid 6.3K in premium! How awesome is that"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus4_LOGO}
            CusName={"ASWATHY NAMBIAR"}
            CusID={"@wonder_bubble"}
            CusText={
              "Thanks for the splendid car revive service @AckoInsurance! The service man was very hardworking and my car is now sparkling clean 😇✨ #GoodDeedsNeedAMention"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus1_LOGO}
            CusName={"RANJITH"}
            CusID={"@ranjithkp12"}
            CusText={
              "@AckoInsurance Really got a very pleasant experience whether it was a claim lodgement surveyor appointment and finally payment settlement.Thanks team @AckoInsurance again"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus2_LOGO}
            CusName={"RANJITH"}
            CusID={"@ranjithkp12"}
            CusText={
              "@AckoInsurance Really got a very pleasant experience whether it was a claim lodgement surveyor appointment and finally payment settlement.Thanks team @AckoInsurance again"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus3_LOGO}
            CusName={"RANJITH"}
            CusID={"@ranjithkp12"}
            CusText={
              "@AckoInsurance Really got a very pleasant experience whether it was a claim lodgement surveyor appointment and finally payment settlement.Thanks team @AckoInsurance again"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus4_LOGO}
            CusName={"CHIRAG BARJATYA"}
            CusID={"@chiragbarjatyaa"}
            CusText={
              "Renewed my car insurance today with Acko again. Two years in a row. Such a good service. No spam, clean UI on website and email. Quick call connect. Appreciation tweet for Acko"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus2_LOGO}
            CusName={"PIYUSH SHARMA"}
            CusID={"@PiyushS87345231"}
            CusText={
              "@AckoInsurance generally i do not post like this, But your work is really appreciable. Got settlement in one day. Though amount is very less then actual repair cost but fast processing and no lengthy documentation. Thankyou!"
            }
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <ACkoSlider
            CusImg={Images.Cus3_LOGO}
            CusName={"PIYUSH SHARMA"}
            CusID={"@PiyushS87345231"}
            CusText={
              "Renewed my car insurance today with Acko again. Two years in a row. Such a good service. No spam, clean UI on website and email. Quick call connect. Appreciation tweet for Acko"
            }
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default Slot;

//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
