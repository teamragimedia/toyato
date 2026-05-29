import { useEffect, useState } from "react";

export default function useCookieConsent() {
  const [consent, setConsent] = useState(localStorage.getItem("cookieConsent"));

  useEffect(() => {
    const updateConsent = () => {
      setConsent(localStorage.getItem("cookieConsent"));
    };

    window.addEventListener("cookieConsentChanged", updateConsent);

    return () => {
      window.removeEventListener("cookieConsentChanged", updateConsent);
    };
  }, []);

  return consent === "accepted";
}
