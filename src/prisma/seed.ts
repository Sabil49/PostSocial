import { PrismaClient, Prisma } from "../../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Sabil",
    email: "md.sabeel10@gmail.com",
    password: "sabil123",
    // emailVerified: new Date(),
    // accounts: {
    //   create: [ 
    //     {
    //       provider: "google",
    //       providerAccountId: "123456789",
    //     },
    //     {
    //       provider: "github",
    //       providerAccountId: "987654321",
    //     },
    //   ],
    // },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();