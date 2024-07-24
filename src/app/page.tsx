"use client";
import Image from "next/image";

import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Calistoga } from "next/font/google";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };
  const { isLoaded, isSignedIn, userId } = useAuth();

  console.log("this is user : ", userId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      homepage
      <button onClick={handleClick}>Go to Dashboard</button>
      {userId ? (
        <SignOutButton />
      ) : (
        <SignInButton fallbackRedirectUrl="/sign-in" />
      )}
    </main>
  );
}
