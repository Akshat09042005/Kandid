"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginDialogContent from "./loginDialog";
import SignupDialogContent from "./signupDialog";

export default function AuthDialog() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [open, setOpen] = useState(true); 

  const handleAuthSuccess = () => {
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md w-full font-primary backdrop-blur-3xl border-none shadow-xl rounded-lg p-6"
      >
        {mode === "signup" ? (
          <SignupDialogContent
            onSwitch={() => setMode("login")}
            onSignup={handleAuthSuccess}
          />
        ) : (
          <LoginDialogContent
            onSwitch={() => setMode("signup")}
            onLogin={handleAuthSuccess} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
