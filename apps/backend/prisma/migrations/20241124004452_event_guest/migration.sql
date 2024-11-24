-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "bgImage" TEXT NOT NULL,
    "expectedAudience" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmation" BOOLEAN NOT NULL,
    "hasCompanions" BOOLEAN NOT NULL,
    "quantityCompanions" INTEGER NOT NULL,
    "eventId" TEXT,
    CONSTRAINT "convidados_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
