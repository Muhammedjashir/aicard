"use client";

export default function OrderingPage() {
  return (
    <div className="mt-10 min-h-screen w-full bg-white px-5 sm:px-8 md:px-16 lg:px-24 py-12 text-gray-800">

      {/* Page Title */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ordering Your Physical NFC Card
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl">
          Follow the steps below to order your NFC-enabled business card or choose a digital-only plan.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* SECTION – Step 1 */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Step 1: Get Your Card</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Below the share section, click <strong>Get Your Card</strong>.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Choose Card Design</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
            <li>Browse a wide range of physical card designs</li>
            <li>Click on a card style</li>
            <li>Click the Right Arrow (→)</li>
            <li>Click <strong>Buy This Card</strong></li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Enter Email (Optional)</h3>
          <p className="text-gray-700 leading-relaxed">
            If you skipped entering your email earlier, you can add it here.
            <br />Click <strong>Next</strong>.
          </p>

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

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Payment Options</h3>
          <p className="text-gray-700 mb-2 leading-relaxed">
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
        </div>

        {/* SECTION – After Ordering */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">After You Place the Order</h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-2">CRO Verification Call</h3>
          <p className="text-gray-700 leading-relaxed">
            A Customer Relation Officer will contact you to:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2 leading-relaxed">
            <li>Share a preview of your physical card</li>
            <li>Confirm your details</li>
            <li>Ensure everything is correct before printing</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Delivery Timeline</h3>
          <p className="text-gray-700 leading-relaxed">
            Your NFC card will be delivered within <strong>5–7 working days</strong>.
          </p>
        </div>

        {/* SECTION – Digital Only */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            How to Opt for Digital-Only Card (₹899 Plan)
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            If you do not want a physical NFC card, follow these steps:
          </p>

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

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">🟦 Step 4: Purchase Digital-Only Plan</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
            <li>Click <strong>Buy at ₹899/-</strong></li>
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
        </div>

        {/* SECTION – After Activation */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Using Your Digital Card
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-2">Share via WhatsApp / Link</h3>
          <p className="text-gray-700 leading-relaxed">
            Send your digital card link to anyone instantly.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">QR Code Sharing</h3>
          <p className="text-gray-700 leading-relaxed">
            Every digital card includes a QR code for easy access.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">NFC Tap Usage</h3>
          <p className="text-gray-700 leading-relaxed">
            Once your physical card arrives:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
            <li>Tap it on any NFC-enabled smartphone</li>
            <li>Your digital card opens instantly</li>
            <li>No app is required</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
