/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center  mx-auto mt-4">
            <p className="text-orange-500 mb-2">{subTitle}</p>
            <div className="border-b-2  border-gray-200">
            <h3 className="text-3xl border-b-2 pb-2 mx-32 md:mx-[25rem] border-orange-500  font-bold">{title}</h3>
            </div>

        </div>
    );
};

export default SectionTitle;