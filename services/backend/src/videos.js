// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// export const handler = async (event) => {
module.exports.handler = async (event) => {
  const videos = await prisma.video.findMany({ take: 10 });

  return {
    statusCode: 200,
    body: JSON.stringify(videos, null, 2),
  };
};
