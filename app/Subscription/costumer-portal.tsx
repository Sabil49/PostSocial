"use client";
export default function CustomerPortal() {
    const openPortal = async () => {
  const res = await fetch("/api/payments/dodo/customer-portal?customer_id=cus_12345");
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
