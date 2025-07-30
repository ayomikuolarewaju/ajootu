/*
  Warnings:

  - The primary key for the `Group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupActivity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupInvitation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `JoinRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
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
    CONSTRAINT "Group_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Group_avatarActivityId_fkey" FOREIGN KEY ("avatarActivityId") REFERENCES "GroupActivity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Group" ("avatar", "avatarActivityId", "color", "createdAt", "creatorId", "description", "id", "isPrivate", "lastActivity", "name", "role") SELECT "avatar", "avatarActivityId", "color", "createdAt", "creatorId", "description", "id", "isPrivate", "lastActivity", "name", "role" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
CREATE TABLE "new_GroupActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "groupId" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "target" TEXT,
    "activityType" TEXT,
    "time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GroupActivity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_GroupActivity" ("action", "activityType", "groupId", "id", "target", "time", "userId") SELECT "action", "activityType", "groupId", "id", "target", "time", "userId" FROM "GroupActivity";
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
    CONSTRAINT "GroupInvitation_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupInvitation_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "GroupRole" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_GroupInvitation" ("createdAt", "groupId", "id", "invitedById", "invitedUserId", "respondedAt", "roleId", "status") SELECT "createdAt", "groupId", "id", "invitedById", "invitedUserId", "respondedAt", "roleId", "status" FROM "GroupInvitation";
DROP TABLE "GroupInvitation";
ALTER TABLE "new_GroupInvitation" RENAME TO "GroupInvitation";
CREATE TABLE "new_GroupRole" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "groupId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    CONSTRAINT "GroupRole_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GroupRole" ("groupId", "id", "level", "name") SELECT "groupId", "id", "level", "name" FROM "GroupRole";
DROP TABLE "GroupRole";
ALTER TABLE "new_GroupRole" RENAME TO "GroupRole";
CREATE TABLE "new_JoinRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "groupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decidedAt" DATETIME,
    CONSTRAINT "JoinRequest_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JoinRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JoinRequest" ("createdAt", "decidedAt", "groupId", "id", "message", "status", "userId") SELECT "createdAt", "decidedAt", "groupId", "id", "message", "status", "userId" FROM "JoinRequest";
DROP TABLE "JoinRequest";
ALTER TABLE "new_JoinRequest" RENAME TO "JoinRequest";
CREATE TABLE "new_Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Member_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Member_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "GroupRole" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("groupId", "id", "joinedAt", "roleId", "userId") SELECT "groupId", "id", "joinedAt", "roleId", "userId" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
CREATE UNIQUE INDEX "Member_userId_groupId_key" ON "Member"("userId", "groupId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name") SELECT "createdAt", "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
