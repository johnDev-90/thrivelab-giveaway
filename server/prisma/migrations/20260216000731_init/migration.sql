-- CreateTable
CREATE TABLE "FormData" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "instagramHandle" TEXT,
    "painArea" TEXT[],
    "painAreaOther" TEXT,
    "whyNotYet" TEXT[],
    "interestLevel" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FormData_id_key" ON "FormData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FormData_email_key" ON "FormData"("email");
