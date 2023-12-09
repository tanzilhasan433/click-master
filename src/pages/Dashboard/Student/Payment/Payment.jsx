import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./ClickOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    //using LINK state to pass price
    const location = useLocation();
    const { price, classId, className,selectedId } = location.state || {};
    const totalPrice = parseFloat(price);

    return (
        <div>
            <SectionTitle
                title="Payment"
                subTitle="Make your"
                > </SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    price={totalPrice}
                    classId={classId}
                    className={className}
                    selectedId={selectedId}
                    ></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;