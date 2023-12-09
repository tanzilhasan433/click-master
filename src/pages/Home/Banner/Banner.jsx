


// eslint-disable-next-line react/prop-types
const Banner = ({ image }) => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Turn Photo into <span className="text-orange-600">Masterwork</span> </h1>
                    <p className=" mb-5">Unleash Your Creative Vision! Discover the art and craft of photography with our dynamic and student-driven photography school. We offer a unique learning experience where passionate student instructors guide you on an inspiring journey through the captivating world of photography.</p>
                    <button className="btn primary-btn">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;