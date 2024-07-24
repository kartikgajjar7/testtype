"use client";
import { useRouter } from "next/navigation";
import { RedirectToUserProfile } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
export default function Dashboard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      this is dashboard page
      <UserButton />
      <button onClick={handleClick}>Go to Home page</button>
    </main>
  );
}
