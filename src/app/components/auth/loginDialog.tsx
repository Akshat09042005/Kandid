"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function LoginDialog({
  onSwitch,
  onLogin,   // ✅ add this
}: {
  onSwitch: () => void;
  onLogin?: () => void; // ✅ optional
}) {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

const handleLogin = async () => {
  setLoading(true);
  setError("");
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Login failed");
    }

    console.log("✅ Login successful:", data);

    if (onLogin){
      onLogin();
    }

    setOpen(false);

    if (onSwitch) onSwitch(); 

    localStorage.setItem("auth-token", data.token);

  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else if (typeof err === "string") {
      setError(err);
    } else {
      setError("Something went wrong");
    }
  } finally {
    setLoading(false);
  }
};

  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google"; 

  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md w-full font-primary backdrop-blur-3xl border-none shadow-xl rounded-lg p-6"
      >
        <div className="flex flex-col gap-6 items-center text-center">
          {/* Header */}
          <div>
            <h1 className="text-xl font-primary font-semibold">
              Login to your account
            </h1>
            <p className="text-sm font-primary text-gray-500 font-medium">
              Enter your credentials to continue.
            </p>
          </div>

          {/* Email + Password */}
          <div className="w-full flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full px-4 py-5"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full px-4 py-5"
            />
            <Button
              onClick={handleLogin}
              disabled={loading}
              variant="default"
              className="w-full py-5 bg-blue-700 hover:bg-blue-700 shadow-[0px_2px_10px_2px_rgba(25,118,210,0.2)] rounded-full justify-center"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center w-full">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full flex items-center gap-2 py-5 rounded-full justify-center"
          >
            <span>Continue with Google</span>
          </Button>

          {/* Switch to Signup */}
          <div
            onClick={onSwitch}
            className="text-sm mt-2 hover:underline underline-offset-2 cursor-pointer"
          >
            New User?{" "}
            <span className="text-zinc-800">Create New Account</span>
          </div>

          {/* Footer */}
          <div className="text-zinc-500 text-xs">
            By continuing, you agree to our{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              T&Cs
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
