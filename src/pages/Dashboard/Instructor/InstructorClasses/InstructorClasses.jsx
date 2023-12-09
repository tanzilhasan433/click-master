
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";

const InstructorClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/instructor?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <div className="overflow-x-auto mt-10 mx-5">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>No</th>
                            <th>Status</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Enrolled</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <button className={`badge py-3 text-white ${item.status === "approved" && "bg-green-400" || item.status === "denied" && "bg-red-500" || "bg-red-300"}`}>{item.status}</button>
                                </td>
                                <td className="font-semibold">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                        <div className="font-bold">
                                            {item.name}
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td className="font-bold">
                                    {item.enrolled || 0}
                                </td>
                                <td className="font-bold">
                                    {item.availableSeats}
                                </td>
                                <td >
                                    ${item.price}
                                </td>
                                <td >
                                    {item.status === "denied" && item.feedback}
                                </td>
                                <td>
                                    <button className="btn btn-xs btn-primary text-white">Update</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;

