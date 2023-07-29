import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
// const uuid = require("uuid");
import { v4 } from "uuid";

const prisma = new PrismaClient();
async function main() {
  for (let i = 0; i < 100; i++) {
    // Add user
    const email = faker.internet.email();
    const user = await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        first: faker.person.firstName(),
        last: faker.person.lastName(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        username: faker.internet.userName(),
      },
    });

    // Add profile
    const profileUUID = v4();
    const profile = await prisma.profile.upsert({
      where: { id: profileUUID },
      update: {},
      create: {
        userId: user.id,
        bio: faker.lorem.paragraph(),
      },
    });

    // Add user's posts
    for (let x = 0; x < 10; x++) {
      const trackUUID = v4();
      const track = await prisma.track.upsert({
        update: {},
        create: {
          type: "SONG",
          title: faker.music.songName(),
          artist: faker.person.fullName(),
          albumTitle: faker.lorem.word(),
        },
        where: { id: trackUUID },
      });

      const postUUID = v4();
      const post = await prisma.post.upsert({
        where: { id: postUUID },
        update: {},
        create: {
          active: true,
          authorId: user.id,
          trackId: track.id,
        },
      });
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
