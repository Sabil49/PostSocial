import { PrismaClient,Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
   {
    name: "Iftisha",
    email: "iftisha.saifi6@gmail.com",
    password: "iftisha123",
   },
   {
    name: "Saifi",
    email: "md.saifi035@gmail.com",
    password: "saifi123",
   }
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();