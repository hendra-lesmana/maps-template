"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[400px]">
        <CardContent className="space-y-6 pt-6">
          <div className="flex justify-center mb-6">
            <Image src="/globe.svg" alt="Logo" width={48} height={48} />
          </div>
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            className="w-full"
            onClick={() => window.location.href = "/"}
          >
            Return to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}