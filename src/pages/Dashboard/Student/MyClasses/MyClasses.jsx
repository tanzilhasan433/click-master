
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useSelectedClass from "../../../../hook/useSelectedClass";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import useAuth from "../../../../hook/useAuth";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [classes] = useSelectedClass();
    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useSelectedClass();
    const { user } = useAuth();

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/classes/selected/${id}?email=${user?.email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'The class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <SectionTitle
                title="My Selected Class"
                subTitle="Join now"
            />
            {
                classes.length == 0 ?
                    <div className="flex mt-5 flex-col-reverse items-center justify-center ">
                        <img className="w-1/2" src="https://i.ibb.co/7rH4ZVG/Empty-amico.png" alt="" />
                        <p className="text-3xl">No class Found</p>
                    </div>
                    : <div className="overflow-x-auto mt-10 mx-5">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-slate-200">
                                <tr>
                                    <th>No</th>
                                    <th>Course title</th>
                                    <th>Instructor</th>
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
                                        <td className="font-semibold">
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.instructor}
                                        </td>
                                        <td className="font-bold">
                                            ${item.price}
                                        </td>
                                        <td className="flex gap-2  items-center">
                                            <Link to="/dashboard/payment"
                                                state={{
                                                    price: item.price, selectedId: item._id,
                                                    classId: item.classId, className: item.name
                                                }}>
                                                <button className="btn bg-green-600 hover:bg-green-500 text-white  btn-xs">Pay</button>
                                            </Link>
                                            <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 hover:bg-red-400 text-white btn-xs"><FaTrash /></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
            }
        </div>
    );
};

export default MyClasses;