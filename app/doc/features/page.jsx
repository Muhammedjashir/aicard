"use client";

export default function OrderingPage() {
  return (
    <div className="mt-10 min-h-screen bg-white w-full px-4 sm:px-6 md:px-20 py-12 md:py-20 text-gray-800">

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Ordering Your Physical NFC Card
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
        Follow the steps below to order your NFC-enabled business card or choose a digital-only plan.
      </p>

      {/* Order Section */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">Step 1: Get Your Card</h2>

        <p className="text-gray-700 mb-3 leading-relaxed">
          Below the share section, click <strong>Get Your Card</strong>.
        </p>

        {/* Design Selection */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Choose Card Design</h3>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Browse a wide range of physical card designs</li>
          <li>Click on a card style</li>
          <li>Click the Right Arrow (→)</li>
          <li>Click <strong>Buy This Card</strong></li>
        </ul>

        {/* Email Section */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Enter Email (Optional)</h3>

        <p className="text-gray-700 leading-relaxed">
          If you skipped entering your email earlier, you can add it here.  
          <br />Click <strong>Next</strong>.
        </p>

        {/* Address Section */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Add Delivery Address</h3>

        <p className="text-gray-700 leading-relaxed">Enter:</p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Your Name</li>
          <li>House / Flat Number</li>
          <li>Street Address</li>
          <li>City</li>
          <li>PIN Code</li>
          <li>State</li>
          <li>Phone Number</li>
        </ul>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Then click <strong>Next</strong>.
        </p>

        {/* Payment Section */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Payment Options</h3>

        <p className="text-gray-700 mb-3 leading-relaxed">
          Click <strong>Pay Now</strong>. You can choose from:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>UPI</li>
          <li>Credit/Debit Card</li>
          <li>Net Banking</li>
          <li>CBDC</li>
          <li>Other online payment methods</li>
        </ul>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Complete the payment to confirm your order.
        </p>

      </section>

      {/* After Ordering */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">After You Place the Order</h2>

        {/* Verification */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">CRO Verification Call</h3>
        <p className="text-gray-700 leading-relaxed">
          A Customer Relation Officer will contact you to:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Share a preview of your physical card</li>
          <li>Confirm your details</li>
          <li>Ensure everything is correct before printing</li>
        </ul>

        {/* Delivery */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Delivery Timeline</h3>
        <p className="text-gray-700 leading-relaxed">
          Your NFC card will be delivered within <strong>5–7 working days</strong>.
        </p>
      </section>

      {/* Digital Only Plan */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          How to Opt for Digital-Only Card (₹599 Plan)
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          If you do not want a physical NFC card, follow these steps:
        </p>

        {/* Steps */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">🟦 Step 1: Go to “View Website”</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          On the “Your Digital Card is Ready to Share” page, click <strong>View Website</strong>.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2">🟦 Step 2: Click “Activate Now”</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At the top of your digital card preview, click <strong>Activate Now</strong>.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2">🟦 Step 3: Choose “Digital Business Card”</h3>
        <p className="text-gray-700 leading-relaxed">
          On the “Get Your Physical Card” screen, choose:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2 leading-relaxed">
          <li><strong>Physical NFC Card</strong></li>
          <li><strong>Digital Business Card</strong> → Select this</li>
        </ul>

        {/* Payment */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">🟦 Step 4: Purchase Digital-Only Plan</h3>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Click <strong>Buy at ₹599/-</strong></li>
          <li>Fill Name, Email, Phone, Address</li>
          <li>Click <strong>Pay Now</strong></li>
          <li>
            Complete payment via:
            <ul className="list-disc pl-6 mt-2 space-y-1 leading-relaxed">
              <li>UPI</li>
              <li>Credit/Debit Card</li>
              <li>Net Banking</li>
              <li>CBDC (if available)</li>
            </ul>
          </li>
        </ul>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Your digital card will be activated instantly.
        </p>
      </section>

      {/* Usage */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">Using Your Digital Card</h2>

        {/* WhatsApp */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Share via WhatsApp / Link</h3>
        <p className="text-gray-700 leading-relaxed">
          Send your digital card link to anyone instantly.
        </p>

        {/* QR */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">QR Code Sharing</h3>
        <p className="text-gray-700 leading-relaxed">
          Every digital card includes a QR code for easy access.
        </p>

        {/* NFC */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">NFC Tap Usage</h3>
        <p className="text-gray-700 leading-relaxed">
          Once your physical card arrives:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Tap it on any NFC-enabled smartphone</li>
          <li>Your digital card opens instantly</li>
          <li>No app is required</li>
        </ul>
      </section>
    </div>
  );
}
