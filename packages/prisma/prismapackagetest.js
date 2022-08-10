const { PrismaClient } = require('.prisma/client');
// const { PrismaClient } = require('@monorepo-test/prisma');
// const { PrismaClient } = require('./node_modules/.prisma/client');

const prisma = new PrismaClient();

(async () => {
  const animals = await prisma.animal.findMany();

  console.log(animals);
})();
