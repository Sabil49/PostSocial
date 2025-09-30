"use client"

import { useState } from "react"

export default function CustomerPortal() {
  const [loading, setLoading] = useState(false)

  const handlePortal = async () => {
    try {
      setLoading(true)
      const res = await fetch("api/payments/dodo/customer-portal")
      if (!res.ok) throw new Error("Failed to create portal session")

      const data = await res.json()
      if (data.portal_url) {
        window.location.href = data.portal_url
      }
    } catch (err) {
      console.error("Error creating portal session", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handlePortal}
      disabled={loading}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Loading..." : "Manage Subscription"}
    </button>
  )
}
