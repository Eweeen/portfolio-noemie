/*
  Warnings:

  - You are about to alter the column `lottie` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Category` MODIFY `lottie` JSON NOT NULL;
