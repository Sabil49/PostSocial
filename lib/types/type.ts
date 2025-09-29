interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
  loginAt: Date | null;
}

interface subscription {
  id: string;
  subscriptionId: string;
  subscriptionStatus: "active" | "canceled" | "past_due";
  planId: string;
  subscriptionType: "FREE" | "PRO" | "LIFETIME";  
  nextBillingDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type { User, subscription };