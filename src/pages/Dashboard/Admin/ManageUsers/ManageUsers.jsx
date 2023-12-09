

import useAxiosSecure from "../../../../hook/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsers from "../../../../hook/useUsers";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [users, refetch] = useUsers();

    const handleMakeAdmin = (email) => {
        axiosSecure.patch('/users', { email: email, role: "admin" })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'user assigned as Admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = (email) => {
        axiosSecure.patch('/users', { email: email, role: "instructor" })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'user assigned as Instructor',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <SectionTitle
                title="Users Role"
                subTitle="Manage"
            />
            {
                <div className="overflow-x-auto mt-10 mx-5">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-slate-200">
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td className="font-semibold">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} />
                                                </div>
                                            </div>
                                            <div className="font-bold">
                                                {user.name}
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className="font-bold uppercase">
                                        {user.role}
                                    </td>
                                    <td >
                                        <button
                                            onClick={() => handleMakeAdmin(user.email)}
                                            className="btn btn-xs bg-green-500 hover:bg-green-600 text-white me-2"
                                            disabled={user.role === "admin" && true}>
                                            <FaUserTie /> Make Admin
                                        </button>
                                        <button
                                            onClick={() => handleMakeInstructor(user.email)}
                                            className="btn btn-xs  bg-blue-500 hover:bg-blue-600 text-white"
                                            disabled={user.role === "instructor" || user.role === "admin" && true}>
                                            <FaUserGraduate />Make Instructor
                                        </button>
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

export default ManageUsers;

