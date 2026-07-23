"use client";

import { useSyncExternalStore, useCallback } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const CONSENT_KEY = "cookie-consent";
type Consent = "accepted" | "refused" | null;

// Simple external store over localStorage
let listeners: Array<() => void> = [];

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.push(callback);
  window.addEventListener("storage", callback); // sync across tabs
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Consent {
  const stored = localStorage.getItem(CONSENT_KEY);
  return stored === "accepted" || stored === "refused" ? stored : null;
}

function getServerSnapshot(): Consent {
  return null; // no localStorage on the server
}

function setConsentValue(choice: "accepted" | "refused") {
  localStorage.setItem(CONSENT_KEY, choice);
  emitChange(); // notify this tab's subscribers immediately
}

export default function CookieConsent({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const handleChoice = useCallback((choice: "accepted" | "refused") => {
    setConsentValue(choice);
  }, []);

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={gaId} />}

      {consent === null && (
        <div className="fixed z-50 bottom-0 right-0 left-0 bg-[#e2e8f6] font-[epilogue] py-4 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex-1">
            J’utilise des cookies pour mieux comprendre l’audience de mon site
            :)
          </p>
          <div className="flex gap-8">
            <button
              className="text-white font-black bg-red px-3 py-2 rounded-sm -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              onClick={() => handleChoice("accepted")}
            >
              Avec plaisir !
            </button>
            <button
              className="text-[#808397] hover:text-black-blue font-medium transition-colors duration-300 cursor-pointer"
              onClick={() => handleChoice("refused")}
            >
              Non merci
            </button>
          </div>
        </div>
      )}
    </>
  );
}
