export default function ReturnandRefund() {
  return (
    <>
      <div className="bg-black text-white px-8 py-12">
        {/* Return Policy */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-center mt-8">
            Return Policy
          </h1>

          <h3 className="font-semibold text-2xl mb-3">No Returns or Refunds</h3>

          <p>
            Thank you for shopping with IMIT.com. We take pride in offering
            high-quality digital products and services tailored to meet your
            needs. Please note that all purchases made on IMIT.com are final. We
            have a strict No Return and No Refund policy. Once a purchase is
            completed, we do not accept returns or provide refunds under any
            circumstances.
            <br /><br />
            This policy is in place due to the nature of our products and
            services, many of which are digital, customized, or instantly
            accessible after purchase.
            <br /><br />
            If you have any doubts or require clarification before placing your
            order, our support team is here to help.
            <br /><br />
            For any support or inquiries, please contact us at{" "}
            <a
              href="mailto:connect@imitpark.com"
              className="text-blue-600 underline"
            >
              connect@imitpark.com
            </a>
            .
            <br /><br />
            By completing a purchase on IMIT.com, you acknowledge that you have
            read, understood, and agreed to this No Return and No Refund Policy.
          </p>
        </div>

        {/* Refund Policy */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-center mt-8">
            Refund Policy
          </h1>

          <h3 className="font-semibold text-2xl mb-3">No Refunds</h3>

          <p>
            At IMIT.com, we strive to ensure you are fully satisfied with your
            purchase. However, please note that all sales are final, and we do
            not offer refunds or returns under any circumstances.
            <br /><br />
            If you have technical or sales queries, please feel free to contact
            our support team for assistance.
            <br /><br />
            For any questions or concerns, reach out to us at{" "}
            <a
              href="mailto:connect@imitpark.com"
              className="text-blue-600 underline"
            >
              connect@imitpark.com
            </a>
          </p>

          <p className="mt-4">
            We deeply value the trust our customers place in IMIT.com, and we
            strive to maintain the highest standards. Because our offerings are
            digital and often personalized or instantly accessible after
            purchase, traditional return or refund mechanisms cannot be applied.
            <br /><br />
            However, your satisfaction remains our priority. If you encounter
            technical difficulties or issues accessing purchased services,
            contact our support team immediately.
            <br /><br />
            By continuing to use IMIT.com, you acknowledge and agree to our No
            Refund and No Return Policy.
          </p>
        </div>
      </div>
    </>
  );
}
