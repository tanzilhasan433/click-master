
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../../hook/useClasses";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const setStatus = (id, status) => {
        console.log(id, status);
        axiosSecure.patch('/classes/status', { status: status, id: id })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `classes has been ${status}!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <SectionTitle
                title="All Class"
                subTitle="Manage"
            />
            <div className="overflow-x-auto mt-10 mx-5">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>No</th>
                            <th>Status</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>

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
                                                <img src={item.image} />
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
                                <td>
                                    
                                    {item.email}
                                </td>
                                <td>
                                    {item.availableSeats}
                                </td>
                                <td className="font-bold">
                                    ${item.price}
                                </td>
                                <td className="flex  mt-3 gap-3  items-center">
                                    <button
                                        onClick={() => setStatus(item._id, "approved")}
                                        className="btn btn-xs btn-success text-white"
                                        disabled={item.status !== "pending" && true}
                                    >Approve</button>
                                    <button
                                        onClick={() => setStatus(item._id, "denied")}
                                        className="btn btn-xs  bg-red-500 text-white"
                                        disabled={item.status !== "pending" && true}
                                    >Deny</button>
                                    <Link to={`/dashboard/feedback/${item._id}`}>
                                        <button className="btn btn-xs btn-info text-white">Feedback</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default ManageClasses;


