// app/customer-portal/route.ts
import { CustomerPortal } from '@dodopayments/nextjs'

export const GET = CustomerPortal({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT === 'live_mode' ? 'live_mode' : process.env.DODO_PAYMENTS_ENVIRONMENT === 'test_mode' ? 'test_mode' : undefined,
})
