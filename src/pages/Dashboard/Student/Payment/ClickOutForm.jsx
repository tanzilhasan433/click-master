import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import useAuth from "../../../../hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CheckOutForm = ({ price, className, classId, selectedId }) => {
    
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState("");
    
    const [payLoading, setPayLoading] = useState(false);



    // payment intent
    useEffect(() => {
        console.log(price);
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price,axiosSecure])

    //card payment
    const handleSubmit = async event => {
        event.preventDefault();
        setPayLoading(true);
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        // if (error) {
        //     setCardError(error.message);
        // } else {
        //     setCardError("")
        // }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            // setCardError(confirmError);
        }
        setPayLoading(false)
        if (paymentIntent.status === "succeeded") {
            const payment = {
                transactionId: paymentIntent.id,
                date: new Date(),
                name: user?.displayName,
                email: user?.email,
                price,
                classId,
                className,
                selectedId
            };

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Successfully done!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard/myclasses')
                    }
                })

        }
    }

    return (
        <form className="mx-auto mt-10 lg:w-1/3" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/* <p>{cardError}</p> */}
            <button className="btn primary-btn btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || payLoading}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;


