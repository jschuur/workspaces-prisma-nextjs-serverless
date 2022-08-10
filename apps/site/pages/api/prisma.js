import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const videos = await prisma.animal.findMany({ take: 10 });

  res.status(200).json(videos);
}
