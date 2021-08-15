import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';

const prisma = new PrismaClient();

export async function validateEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

export async function login(user, password) {
  return new Promise((resolve, reject) => {
    const compare = compareSync(password, user.password);
    if (compare) {
      const token = createToken(user);
      resolve({ expiresIn: process.env.EXPIRES_IN, token });
    } else {
      reject(new Error({ message: 'User or password incorect' }));
    }
  });
}

function createToken(user) {
  const User = {
    email: user.email,
    id: user.id,
  };
  return sign(
    {
      data: User,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES_IN }
  );
}
