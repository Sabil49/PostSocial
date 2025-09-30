"use client"

import { useState } from "react"

export default function CustomerPortal() {
  const [loading, setLoading] = useState(false)

 async function openCustomerPortal(customerId: string) {
  const res = await fetch(`/api/payments/dodo/customer-portal?customer_id=${customerId}`)
  if (res.ok) {
    const { url } = await res.json()
    window.location.href = url
  } else {
    console.error("Failed to open customer portal")
  }
}


  return (
    <button
      onClick={() => openCustomerPortal("cus_Uqwg3OWPsUR5ftSq7qwHM")}
      disabled={loading}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Loading..." : "Manage Subscription"}
    </button>
  )
}
