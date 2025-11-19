"use client";

export default function TemplatesPage() {
  return (
    <div className="mt-10 min-h-screen bg-white w-full px-4 sm:px-6 md:px-20 py-12 md:py-20 text-gray-800">

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Choosing Templates
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
        Learn how to select, customize, and finalize your landing page or mini website theme in MyAiCard.
      </p>

      {/* Landing Templates */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Landing Page Templates</h2>

        <p className="text-gray-700 mb-2 leading-relaxed">
          These are simple and elegant designs ideal for:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Professionals</li>
          <li>Freelancers</li>
          <li>Business owners who want a single-page digital card</li>
        </ul>
      </section>

      {/* Mini Website Templates */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Mini Website Templates</h2>

        <p className="text-gray-700 mb-2 leading-relaxed">
          These provide multiple sections, suitable for:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Shops</li>
          <li>Service providers</li>
          <li>Creators</li>
          <li>Businesses with more content</li>
        </ul>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Some mini websites may show dummy text or sample data — you can replace all content with your own.
        </p>
      </section>

      {/* Switching Themes */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Switching Themes</h2>

        <p className="text-gray-700 mb-2 leading-relaxed">
          You can change themes anytime before clicking <strong>Finish</strong>:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Click <strong>Themes</strong></li>
          <li>Browse all templates</li>
          <li>Preview any design</li>
          <li>Select the one you like</li>
        </ol>
      </section>

      {/* Template Limitations */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Template Limitations (After Finish)</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Once you click <strong>Finish</strong>:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>You <strong>cannot change the entire template</strong></li>
          <li>But you <strong>can edit all content, colors, styles, and sections</strong></li>
        </ul>
      </section>

      {/* Editing Your Card */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md mb-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Editing Your Card</h2>

        {/* Text / Images */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Changing Text, Images & Links</h3>
        <p className="text-gray-700 leading-relaxed">
          Every element can be edited:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Tap on the item</li>
          <li>Edit the content</li>
          <li>Save changes</li>
        </ul>

        {/* Sections */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Adding or Removing Sections</h3>
        <p className="text-gray-700 leading-relaxed">You can:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Add new sections (Services, Gallery, About, Testimonials, etc.)</li>
          <li>Delete any unused content blocks</li>
        </ul>

        {/* Styling */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Changing Colors and Styles</h3>
        <p className="text-gray-700 leading-relaxed">You can customize:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Colors</li>
          <li>Fonts</li>
          <li>Button styles</li>
          <li>Spacing</li>
          <li>Layout elements</li>
        </ul>

        <p className="text-gray-700 mt-3 leading-relaxed">
          This helps you match the design to your brand identity.
        </p>

        {/* Dummy Content */}
        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">Replacing Dummy Content</h3>
        <p className="text-gray-700 leading-relaxed">
          If your template has placeholder text or images:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>Edit the text directly</li>
          <li>Upload your real images</li>
          <li>Replace banners and buttons</li>
        </ul>
      </section>

      {/* Completion */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Digital Card Is Ready</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          After finishing your edits, you’ll see:
        </p>

        <p className="font-semibold text-gray-800 mb-4 leading-relaxed">
          “Your Digital Card Is Ready to Share”
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-2">Available Options</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            ✏️ <strong>Edit Your Card</strong> – Continue refining anytime.
          </li>
          <li>
            👁️ <strong>View Your Website</strong> – See how it appears to your visitors.
          </li>
          <li>
            🔗 <strong>Share Your Digital Card</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 leading-relaxed">
              <li>WhatsApp</li>
              <li>Email</li>
              <li>QR code</li>
              <li>Social media</li>
              <li>Direct link</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
