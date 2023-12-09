
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import TestimonialCard from '../../../Components/TestimonialCard/TestimonialCard';
import person1 from '../../../assets/testimonials/person1.jpg'
import person2 from '../../../assets/testimonials/person2.jpg'
import person3 from '../../../assets/testimonials/person3.jpg'
import person4 from '../../../assets/testimonials/person4.jpg'
import person5 from '../../../assets/testimonials/person5.jpg'

const Testimonial = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "John Doe",
            review: "The photography courses offered by this school are fantastic! The instructors are knowledgeable and passionate about what they teach. I learned so much and improved my skills significantly. Highly recommended!",
            imageURL: person1
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "I had an amazing experience with the photography courses here. The curriculum is well-structured, and the practical assignments really helped me apply what I learned. The friendly and supportive environment made learning enjoyable.",
            imageURL: person3
        },
        {
            id: 3,
            name: "Michael Johnson",
            review: "I can't express how much I loved the courses at this photography school. The instructors are professional photographers themselves, and they share valuable real-world insights. It's a great place to kickstart your photography journey.",
            imageURL: person4
        },
        {
            id: 4,
            name: "Emily Adams",
            review: "I've taken multiple courses here, and each one has been excellent. The small class sizes allowed for personalized attention, and I never felt afraid to ask questions. I've seen a significant improvement in my photography skills.",
            imageURL: person2
        },
        {
            id: 5,
            name: "David Wilson",
            review: "I highly recommend this school to anyone interested in photography. The courses cover everything from basic concepts to advanced techniques. The hands-on approach and constructive feedback helped me become a more confident photographer.",
            imageURL: person5
        }
    ];



    return (
        <div className='my-20'>
            <SectionTitle
                subTitle={"Testimonials"}
                title={"What our students say about courses"}
                
            />
            <Swiper
                
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[FreeMode, Pagination, Autoplay]}
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                        
                    },
                }}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false,
                }}
                className="mySwiper bg-base-200"
            >
                {
                    testimonialsData.map(testimonialData =>
                        <SwiperSlide
                            key={testimonialData.id}
                            className="my-16"
                        >
                            <TestimonialCard
                                review={testimonialData}
                            >
                            </TestimonialCard>
                        </SwiperSlide>

                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;