"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutReturnPage() {
  const params = useSearchParams();
  const status = params.get("status"); // "success" | "cancelled"

  return (
    <div className="p-8 text-center">
      {status === "success" ? (
        <h1 className="text-2xl font-bold text-green-600">✅ Subscription Successful</h1>
      ) : (
        <h1 className="text-2xl font-bold text-red-600">❌ Checkout Cancelled</h1>
      )}
    </div>
  );
}
