import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-4 py-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-card-foreground">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={() => handleConsent(false)}>
            Recusar Cookies
          </Button>
          <Button size="sm" onClick={() => handleConsent(true)}>
            Aceitar Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
