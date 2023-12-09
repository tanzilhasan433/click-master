
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//images 
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpg';
import img9 from '../../../assets/images/img9.jpg';

import Banner from "../Banner/Banner";

const SliderTop = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
            >
                <SwiperSlide>
                    <Banner image={img1}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img2}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img3}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img4}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img5}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img6}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img7}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img8}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner image={img9}></Banner>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderTop;