// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('.prisma/client');

const prisma = new PrismaClient();

// export const handler = async (event) => {
module.exports.handler = async (event) => {
  const animals = await prisma.animal.findMany();

  return {
    statusCode: 200,
    body: JSON.stringify(animals, null, 2),
  };
};
