/*
  Warnings:

  - Added the required column `place` to the `ProfessionalCareer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProfessionalCareer` ADD COLUMN `place` VARCHAR(191) NOT NULL;
