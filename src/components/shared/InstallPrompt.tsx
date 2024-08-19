"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
      <Button
        className="h-8 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
        onClick={handleInstallApp}
      >
        Install
      </Button>
    </div>
  );
};

export default InstallPrompt;
