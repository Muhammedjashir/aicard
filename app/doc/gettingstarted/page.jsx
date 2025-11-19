"use client";

export default function GettingStartedPage() {
  return (
    <div className="mt-10 min-h-screen bg-white w-full px-4 sm:px-6 md:px-20 py-12 md:py-20 text-gray-800">

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Getting Started
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
        Learn how to create your MyAiCard digital profile in just minutes.
      </p>

      {/* SECTION 1 - What is MyAiCard */}
      <section
        className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          What is MyAiCard?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          MyAiCard is a smart digital identity platform that allows you to
          create a digital business card and mini website in just a few minutes.
        </p>

        <p className="mt-4 font-semibold text-gray-700">
          You can share it through:
        </p>

        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
          <li>NFC tap (with a physical card)</li>
          <li>QR code</li>
          <li>Link sharing (WhatsApp)</li>
        </ul>

        <p className="mt-4 text-gray-700">
          Your digital card can be edited anytime through your dashboard.
        </p>
      </section>

      {/* SECTION 2 - Create Your Card */}
      <section
        className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Create Your Card Now
        </h2>

        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            Visit <span className="font-semibold">myaicard.com</span>
          </li>
          <li>
            Click <span className="font-semibold">Create Your Card Now</span>
          </li>
          <li>
            You will be guided step-by-step to build your digital card in minutes.
          </li>
        </ol>
      </section>

      {/* SECTION 3 – Signing In */}
      <section
        className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Signing In – Sign in with Google
        </h2>

        <p className="text-gray-700 mb-4">
          To start creating your card:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            Click <span className="font-semibold">Sign in with Google</span>
          </li>
          <li>Choose your email</li>
          <li>Allow access to proceed</li>
        </ol>

        <p className="mt-4 text-gray-700">
          Your account is created instantly after sign-in.
        </p>
      </section>
    </div>
  );
}
