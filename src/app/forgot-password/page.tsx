"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

    setIsSubmitting(true);
    try {
      // Add password reset logic here
      console.log("Password reset requested for:", email);
      setIsSuccess(true);
    } catch (error) {
      console.error("Password reset error:", error);
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-10 pt-6 pb-6">
            <div className="flex justify-center mb-6">
              <Image src="/globe.svg" alt="Logo" width={48} height={48} />
            </div>
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-semibold">Forgot Password</h2>
              <p className="text-muted-foreground">
                Enter your email address and we&apos;ll send you a link to reset your password
              </p>
            </div>
            {isSuccess ? (
              <div className="text-center text-green-600 space-y-4">
                <p>Reset link has been sent to your email address.</p>
                <p>Please check your inbox and follow the instructions.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errorMessage ? "border-red-500" : ""}
                    disabled={isSubmitting}
                  />
                  {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {!isSuccess && (
              <Button 
                className="w-full" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            )}
            <div className="flex justify-center w-full text-sm">
              <a href="/login" className="text-primary hover:underline">
                Back to Login
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}