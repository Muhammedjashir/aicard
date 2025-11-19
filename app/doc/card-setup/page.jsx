"use client";

export default function CreateWebsitePage() {
  return (
    <div className=" mt-10 min-h-screen bg-white w-full px-4 sm:px-6 md:px-20 py-12 md:py-20 text-gray-800">

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Create Website
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
        Learn how to start creating your digital website and smart business card using MyAiCard.
      </p>

      {/* SECTION 1 – Start */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Start with “Create Website”</h2>

        <p className="text-gray-700 leading-relaxed">
          After signing in, click <strong>Create Website</strong>. This begins your setup and opens
          a guided chatbot.
        </p>
      </section>

      {/* SECTION 2 – Chatbot */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Using the Chatbot</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          The chatbot guides you step-by-step to create your digital card. It asks the following
          details:
        </p>

        {/* PERSONAL INFO */}
        <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">👤 Personal Details</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Full Name</li>
          <li>Current Designation</li>
          <li>Upload Your Picture (optional – can skip)</li>
        </ul>

        {/* BUSINESS */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">🏢 Business / Company Details</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Company Name (optional)</li>
          <li>Company Logo (optional)</li>
        </ul>

        {/* CONTACT */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">📞 Contact Information</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>WhatsApp Number (mandatory for creating the card)</li>
          <li>Mobile Number (optional)</li>
          <li>Email ID (optional)</li>
          <li>Website Address (optional)</li>
        </ul>

        {/* SOCIAL */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">🌐 Social Media Links</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Facebook Link (optional)</li>
          <li>LinkedIn Link (optional)</li>
          <li>Instagram Link (optional)</li>
        </ul>

        {/* LOCATION */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">📍 Location</h3>
        <p className="text-gray-700 leading-relaxed">
          Select your location directly from the map.
        </p>
      </section>

      {/* SECTION 3 – Question Flow */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Answering Questions</h2>

        <p className="text-gray-700 leading-relaxed">
          You can answer each chatbot question one-by-one.  
          The more details you provide, the richer your digital card will look.
        </p>
      </section>

      {/* SECTION 4 – Themes */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Selecting a Theme First</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Instead of answering questions first, you also have the option to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Select a theme from the top of the chatbot</li>
          <li>Then start answering questions</li>
        </ul>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Both flows work perfectly.
        </p>
      </section>
    </div>
  );
}
