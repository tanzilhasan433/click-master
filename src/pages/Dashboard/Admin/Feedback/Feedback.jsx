
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";


const Feedback = () => {
    const [axiosSecure] = useAxiosSecure();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        axiosSecure.patch('/classes', { feedback: feedback, id: id })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Feedback has been sent!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/manageclasses');
                }
            })
        

    }
    return (
        <div className="flex justify-center items-end">
            <form onSubmit={handleSendFeedback} className="modal-box ">
                <h3 className="font-bold text-lg">Write Feedback</h3>
                <textarea className="w-full textarea textarea-bordered" name="feedback" placeholder="Your Feedback"></textarea>
                <div className="modal-action">
                    <button className="btn text-white btn-info">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;

