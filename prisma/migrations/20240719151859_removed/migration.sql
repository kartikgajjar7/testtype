/*
  Warnings:

  - You are about to drop the column `postcat` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postcat2` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postcat3` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postcat",
DROP COLUMN "postcat2",
DROP COLUMN "postcat3";
