/*
  Warnings:

  - You are about to drop the column `lastResetDate` on the `UsageLimit` table. All the data in the column will be lost.
  - You are about to drop the column `nextBillingDate` on the `UsageLimit` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStatus` on the `UsageLimit` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."UsageLimit" DROP COLUMN "lastResetDate",
DROP COLUMN "nextBillingDate",
DROP COLUMN "subscriptionStatus";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "subscriptionId",
DROP COLUMN "subscriptionType";

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subscriptionStatus" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "subscriptionType" "public"."SubscriptionType" NOT NULL DEFAULT 'FREE',
    "nextBillingDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_subscriptionId_key" ON "public"."Subscription"("subscriptionId");

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
