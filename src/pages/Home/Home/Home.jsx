

import About from "../About/About";
import CountSection from "../CountSection/CountSection";
import Faq2 from "../FAQ/Faq2";
import SliderTop from "../SliderTop/SliderTop";
import Testimonial from "../Testimonial/Testimonial";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
    return (
        <>
            <SliderTop></SliderTop>
            <About></About>
            <TopClasses></TopClasses>
            <CountSection></CountSection>
            <TopInstructors></TopInstructors>   
            <Testimonial></Testimonial>        
            <Faq2></Faq2>
        </>
    );
};

export default Home;

