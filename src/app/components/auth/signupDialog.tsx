import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupDialog({ onSwitch, onSignup }: { onSwitch: () => void; onSignup?: () => void }) {
  const [open, setOpen] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSignup = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: firstName + " " + lastName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setSuccess("Account created successfully! 🎉");

        // ✅ Close dialog after successful signup
        setOpen(false);

        // ✅ Optional: store token locally if returned
        if (data.token) {
          localStorage.setItem("auth-token", data.token);
        }

        // ✅ Notify parent component that user signed up/logged in
        if (onSignup) onSignup();
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md w-full font-primary backdrop-blur-3xl border-none shadow-xl rounded-lg p-6"
      >
        <div className="flex flex-col gap-6 items-start text-center">
          <div>
            <h1 className="text-2xl font-primary font-semibold">
              Register with email
            </h1>
            <p className="text-sm font-primary text-gray-500 font-medium">
              Register using your email address.
            </p>
          </div>

          {/* Name inputs */}
          <div className="flex flex-row gap-4 w-full">
            <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          {/* Email and Password */}
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {/* Error / Success */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <Button
            disabled={loading}
            onClick={handleSignup}
            className="w-full text-center py-5 rounded-full hover:bg-blue-700 bg-blue-800"
          >
            {loading ? "Creating..." : "Create My Account"}
          </Button>

          <p
            onClick={onSwitch}
            className="text-sm text-zinc-500 font-medium text-center w-full mt-2 hover:underline underline-offset-2 cursor-pointer"
          >
            Already have an account? <span className="text-zinc-500 font-medium cursor-pointer">Login</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
