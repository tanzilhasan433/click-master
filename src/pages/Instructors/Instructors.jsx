
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import useInstructors from "../../hook/useInstructors";

const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div className="w-2/3 pt-14 flex-row mx-auto">
            {
                instructors.map(instructor => <InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;