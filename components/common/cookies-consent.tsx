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
        <div className="fixed z-50 bottom-0 right-0 left-0 bg-[#1a1a1a] font-[epilogue] text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex-1">
            Nous utilisons des cookies pour analyser le trafic du site. Vous
            pouvez accepter ou refuser leur utilisation.
          </p>
          <div className="flex gap-2">
            <button
              className="bg-background text-black-blue px-3 py-2 rounded cursor-pointer"
              onClick={() => handleChoice("refused")}
            >
              Refuser
            </button>
            <button
              className="border border-background px-3 py-2 rounded cursor-pointer"
              onClick={() => handleChoice("accepted")}
            >
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
