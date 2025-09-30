"use client";
export default function CustomerPortal() {
    const openPortal = async () => {
  const res = await fetch("/api/payments/dodo/customer-portal?customer_id=cus_12345",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();
  if (data.portal_url) {
    window.location.href = data.portal_url;
  }
};

  return (
    <div>
      <button onClick={openPortal}>
        Manage Subscription
      </button>
    </div>
  );
}
