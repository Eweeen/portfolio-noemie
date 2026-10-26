"use client";

import { useSyncExternalStore, useCallback, useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const CONSENT_KEY = "cookie-consent";
const OPEN_PREFERENCES_EVENT = "cookie-preferences-open";
type Consent = "accepted" | "refused" | null;
let sessionConsent: Consent = null;

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
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "accepted" || stored === "refused" ? stored : null;
  } catch {
    return sessionConsent;
  }
}

function getServerSnapshot(): Consent {
  return null; // no localStorage on the server
}

function setConsentValue(choice: "accepted" | "refused") {
  sessionConsent = choice;
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Keep the choice for this page if browser storage is unavailable.
  }
  emitChange(); // notify this tab's subscribers immediately
}

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="cursor-pointer underline underline-offset-4 hover:text-red"
      aria-controls="cookie-consent"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Gérer les cookies
    </button>
  );
}

export default function CookieConsent({ gtmId }: { gtmId: string }) {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    };
  }, []);

  const handleChoice = useCallback(
    (choice: "accepted" | "refused") => {
      setConsentValue(choice);
      setPreferencesOpen(false);
      if (consent === "accepted" && choice === "refused") {
        // Unmounting GTM does not stop scripts that are already running.
        window.location.reload();
      }
    },
    [consent],
  );

  return (
    <>
      {consent === "accepted" && <GoogleTagManager gtmId={gtmId} />}

      {(consent === null || preferencesOpen) && (
        <div
          id="cookie-consent"
          role="region"
          aria-label="Préférences de cookies"
          className="fixed z-50 bottom-0 right-0 left-0 bg-[#e2e8f6] font-[epilogue] py-4 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="flex-1">
            J’utilise des cookies pour mieux comprendre l’audience de mon site
            :)
          </p>
          <div className="flex gap-8">
            <button
              type="button"
              className="text-white font-black bg-red px-3 py-2 rounded-sm -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              onClick={() => handleChoice("accepted")}
            >
              Avec plaisir !
            </button>
            <button
              type="button"
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
