

const Faq2 = () => {
    return (
        <div className="flex w-4/5  justify-center mx-auto mt-40 mb-20 gap-10 flex-col-reverse lg:flex-row">
            
        <div>
            <h3 className="text-3xl font-bold mb-5"><span className="text-[#fa6a57]">Popular Questions</span> About our
                Photography Courses</h3>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is it possible to pay for an order with Visa and MasterCard payment cards?
                </div>
                <div className="collapse-content">
                    <p>Yes, we accept payments made with Visa and MasterCard payment cards. You can securely pay for your order using these payment methods.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is it possible to pay by credit card?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can pay for your order using a credit card. We accept major credit cards, including Visa and MasterCard, for payment.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I return the course after purchase?
                </div>
                <div className="collapse-content">
                    <p>Our return policy allows for refunds within a specified period after the purchase. Please refer to our refund policy for more details on eligibility and conditions for returning a course. We strive to ensure customer satisfaction, and if you have any concerns, please reach out to our support team.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How do I use a promotional code?
                </div>
                <div className="collapse-content">
                    <p>To use a promotional code, you can enter it during the checkout process when making a purchase. There is usually a field provided where you can input the code. Once entered, the discount or offer associated with the promotional code will be applied to your order.</p>
                </div>
            </div>
        </div>
        <img className="w-1/2" src="https://i.ibb.co/ZBpvvyS/faq-photo-600x506.jpg" alt="" />
    </div>
    );
};

export default Faq2;