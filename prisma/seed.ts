import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "2442c441-071c-41f5-bdbf-d0ab3fe67d8d",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um event p/ programadores apaixonados por código!",
      maximumAttendees: 150,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
});
