"use client";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <div>
      AboutUs
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Home
      </button>
    </div>
  );
}
