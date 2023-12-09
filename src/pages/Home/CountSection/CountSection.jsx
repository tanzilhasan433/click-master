

import CountUp from "react-countup";

const CountSection = () => {
    return (
        <div className="bg-base-200 text-center px-5 py-28">
            <h2 className="font-bold text-3xl mb-3">Our Courses <span className="text-orange-600">at a Glance</span></h2>
            <p className="mb-20 text-lg">The ultimate online photography learning platform <br /> for beginners and professionals</p>
            <div className="grid    lg:grid-cols-4 gap-6 ">
                <div className="shadow-lg bg-white rounded-lg p-10">
                    <h2 className="font-bold text-5xl text-orange-600 ">
                        <CountUp
                            start={90}
                            end={120}
                            duration={5}
                            enableScrollSpy
                        />
                        +
                    </h2>
                    <p className="font-semibold mt-2 text-lg ">Professional Courses</p>
                </div>
                <div className="shadow-lg bg-white rounded-lg p-10">
                    <h2 className="font-bold text-5xl text-orange-600 ">
                        <CountUp
                            start={30}
                            end={65}
                            duration={5}
                            enableScrollSpy
                        />
                        
                    </h2>
                    <p className="font-semibold mt-2 text-lg">Experienced Teachers</p>
                </div>
                <div className="shadow-lg bg-white rounded-lg p-10">
                    <h2 className="font-bold text-5xl text-orange-600 ">
                        <CountUp
                            start={100}
                            end={160}
                            duration={5}
                            enableScrollSpy
                        />
                        
                    </h2>
                    <p className="font-semibold mt-2 text-lg">Lessons per Week</p>
                </div>
                <div className="shadow-lg bg-white rounded-lg p-10">
                    <h2 className="font-bold text-5xl text-orange-600 ">
                        <CountUp
                            start={450}
                            end={503}
                            duration={5}
                            enableScrollSpy
                        />
                    </h2>
                    <p className="font-semibold mt-2 text-lg">Video Tutorials</p>
                </div>

            </div>
        </div>
    );
};

export default CountSection;