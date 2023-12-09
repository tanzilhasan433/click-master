

// eslint-disable-next-line react/prop-types
const InstructorCard = ({ instructor }) => {
    // eslint-disable-next-line react/prop-types
    const { name, email, image } = instructor;
    return (
        <div className="card mb-10 lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-96"><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2  className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn primary-btn">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;