/*
  Warnings:

  - You are about to drop the `GroupRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `groupId` on the `GroupActivity` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Member` table. All the data in the column will be lost.
  - Added the required column `roles` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GroupRole";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "role" TEXT,
    "avatar" TEXT,
    "color" TEXT,
    "lastActivity" TEXT,
    "isPrivate" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" TEXT NOT NULL,
    "avatarActivityId" TEXT,
    "roles" TEXT NOT NULL,
    CONSTRAINT "Group_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Group_avatarActivityId_fkey" FOREIGN KEY ("avatarActivityId") REFERENCES "GroupActivity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Group" ("avatar", "avatarActivityId", "color", "createdAt", "creatorId", "description", "id", "isPrivate", "lastActivity", "name", "role") SELECT "avatar", "avatarActivityId", "color", "createdAt", "creatorId", "description", "id", "isPrivate", "lastActivity", "name", "role" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
CREATE TABLE "new_GroupActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "target" TEXT,
    "activityType" TEXT,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GroupActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_GroupActivity" ("action", "activityType", "id", "target", "time", "userId") SELECT "action", "activityType", "id", "target", "time", "userId" FROM "GroupActivity";
DROP TABLE "GroupActivity";
ALTER TABLE "new_GroupActivity" RENAME TO "GroupActivity";
CREATE TABLE "new_GroupInvitation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "groupId" TEXT NOT NULL,
    "invitedUserId" TEXT NOT NULL,
    "invitedById" TEXT NOT NULL,
    "roleId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" DATETIME,
    CONSTRAINT "GroupInvitation_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupInvitation_invitedUserId_fkey" FOREIGN KEY ("invitedUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupInvitation_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GroupInvitation" ("createdAt", "groupId", "id", "invitedById", "invitedUserId", "respondedAt", "roleId", "status") SELECT "createdAt", "groupId", "id", "invitedById", "invitedUserId", "respondedAt", "roleId", "status" FROM "GroupInvitation";
DROP TABLE "GroupInvitation";
ALTER TABLE "new_GroupInvitation" RENAME TO "GroupInvitation";
CREATE TABLE "new_Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL DEFAULT 'Member',
    CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Member_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("groupId", "id", "joinedAt", "userId") SELECT "groupId", "id", "joinedAt", "userId" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
CREATE UNIQUE INDEX "Member_userId_groupId_key" ON "Member"("userId", "groupId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
