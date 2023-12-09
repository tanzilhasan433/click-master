
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import TopClassCard from "../../../Components/TopClassCard/TopClassCard";
import { Link } from "react-router-dom";


const TopClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);


    return (
        <>
            <SectionTitle title="Popular Courses" subTitle="Learn Online" />
            <div className="grid justify-center p-14 md:grid-cols-3 gap-5">
                {
                    classes.map(classItem => <TopClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></TopClassCard>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to="classes">
                    <button className="btn w-96 btn-outline ">See All Classes </button>
                </Link>
            </div>
        </>

    );
};

export default TopClasses;

