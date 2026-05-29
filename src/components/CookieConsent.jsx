import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);

    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);

    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-5 left-5 z-50 w-[420px] bg-white shadow-2xl rounded-2xl border border-gray-200 p-5">
          <h3 className="font-bold text-lg mb-2">Cookies & Privacy Policy</h3>

          <p className="text-sm text-gray-600 mb-4">
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>

          <p className="text-sm text-gray-600 mb-5">
            Thank you for visiting this website. We value your privacy. We use
            cookies to improve your browsing experience and analyze website
            traffic.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              Less Information
            </button>

            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Accept
            </button>

            <button
              onClick={rejectCookies}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Reject
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-5">
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Cookies Policy</h2>

            <h3 className="font-semibold mb-2">What are Cookies?</h3>

            <p className="mb-4">
              Cookies are alphanumeric identifiers or files that we transfer to
              your device through your browser to recognise your browser and
              provide personalised features.
            </p>

            <h3 className="font-semibold mb-2">How We Use Cookies</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Provide general internal analytics.</li>
              <li>Study traffic patterns and improve website performance.</li>
              <li>Customise your experience.</li>
              <li>Store user preferences.</li>
              <li>Support security measures.</li>
              <li>Prevent fraudulent activity.</li>
              <li>
                Prevent duplicate likes/dislikes by storing consent and IP
                related identifiers.
              </li>
            </ul>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-5 py-2 bg-black text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
