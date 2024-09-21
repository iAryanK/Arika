"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const InstallPrompt = () => {
  const [prompt, setPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);

      if (!window.matchMedia("(display-mode:standalone)").matches) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallApp = () => {
    if (prompt) {
      prompt.prompt();
      setPrompt(null);
    }
  };

  return (
    <div className={` ${showPrompt ? "block" : "hidden"}`}>
      <button
        onClick={handleInstallApp}
        className="group relative me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900"
      >
        <span className="relative flex items-center gap-2 rounded-md bg-white p-[6px] transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 sm:p-1 sm:px-5">
          <Download size={18} />
          <span className="max-sm:hidden">Install</span>
        </span>
      </button>
    </div>
  );
};

export default InstallPrompt;
