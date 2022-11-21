/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `admin_users` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admin_users" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "brands" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "deletedAt";
