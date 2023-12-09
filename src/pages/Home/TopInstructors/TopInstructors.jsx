

import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TopInstructorCard from "../../../Components/TopInstructorCard/TopInstructorCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/instructors/top')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <SectionTitle title="Meet Top Instructors" subTitle="Our Team " />
            <br />
            <Swiper
                
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 4,
                        
                    },
                }}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="my-10 "
            >
                {
                    instructors.map(instructor => <SwiperSlide key={instructor._id}>
                        <TopInstructorCard
                            instructor={instructor}
                        ></TopInstructorCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default TopInstructors;

