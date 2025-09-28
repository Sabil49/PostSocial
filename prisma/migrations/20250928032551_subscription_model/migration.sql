-- CreateEnum
CREATE TYPE "public"."SubscriptionType" AS ENUM ('FREE', 'PRO', 'LIFETIME');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "subscriptionId" TEXT,
ADD COLUMN     "subscriptionType" "public"."SubscriptionType" NOT NULL DEFAULT 'FREE';

-- CreateTable
CREATE TABLE "public"."UsageLimit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "visualizations" INTEGER NOT NULL DEFAULT 0,
    "visualizationLimit" INTEGER NOT NULL DEFAULT 1,
    "lastResetDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextBillingDate" TIMESTAMP(3),
    "subscriptionStatus" TEXT NOT NULL DEFAULT 'active',

    CONSTRAINT "UsageLimit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsageLimit_userId_key" ON "public"."UsageLimit"("userId");

-- AddForeignKey
ALTER TABLE "public"."UsageLimit" ADD CONSTRAINT "UsageLimit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
