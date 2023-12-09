
import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const hostingToken = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])
        //hosting image to imagbb
        fetch(`https://api.imgbb.com/1/upload?key=${hostingToken}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(responseImg => {
                if (responseImg.success) {
                    const imgURL = responseImg.data.display_url;
                    const { name, instructor, email, availableSeats, price } = data;
                    const newClass = { name, img: imgURL, instructor, email, availableSeats: parseInt(availableSeats), price: parseFloat(price), status: "pending", enrolled: 0 };
                    
                    //send new class data to db
                    axiosSecure.post('/classes', newClass)
                        .then(res => {
                            if (res.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class successfully added',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }

            })
    };

    return (
        <div>
            <SectionTitle
                title="Add New Class"
                subTitle="Here"
            />
            <form className="px-16 py-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="class name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name field is required</span>}
                    </div>
                    <div className="form-control">
                        
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-sm w-full max-w-xs " />
                        {errors.image && <span className="text-red-600">image field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" value={user.displayName} {...register("instructor", { required: true })} placeholder="Enter Instructor name" className="input input-bordered" />
                        {errors.instructor && <span className="text-red-600">instructor name field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user.email} {...register("email", { required: true })} placeholder="Enter instructor email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder="Enter available seats" className="input input-bordered" />
                        {errors.availableSeats && <span className="text-red-600">available seats field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
                        {errors.price && <span className="text-red-600">price field is required</span>}
                    </div>
                </div>

                <div className="form-control items-center mt-6">
                    <button className="btn primary-btn  ">add class</button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;

