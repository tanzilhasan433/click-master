
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle
                title="History"
                subTitle="Your Payments"
            />
            <div className="overflow-x-auto mt-10 mx-5">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>No</th>
                            <th>Course title</th>
                            <th>User</th>
                            <th>Trx id</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className="font-semibold">
                                    {item.className}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td >
                                    ${item.transactionId}
                                </td>
                                <td className="font-bold">
                                    ${item.price}
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;

