import { PrismaClient } from '@prisma/client';
import { makeMariaAdapter } from '../config/prisma-adapter';

export const DatabaseService = new PrismaClient({adapter: makeMariaAdapter()});

