
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import ClassesCard from "../../../../Components/ClassesCard/ClassesCard";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const Enrolled = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolled = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle
                title="Enrolled Classes"
                subTitle="watch now"
            />
            <div className="grid grid-cols-2 gap-2 mt-10 mx-20">
                {
                    enrolled.map(classItem => <ClassesCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Enrolled;

