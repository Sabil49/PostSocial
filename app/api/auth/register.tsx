import prisma from '@/lib/prisma';

import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
// Import your database connection and user model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, image, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const hashedPassword = await hash(password, 10); // Hash the password
    // Save user to your database
    // await User.create({ email, password: hashedPassword, name }); 
    await prisma.user.create({
      data: {
        name: name ? name : null,
        email,
        image: image ? image : null,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}