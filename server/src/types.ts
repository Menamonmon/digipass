import { PrismaClient } from "@prisma/client";
export interface GraphQlContext {
  prisma: PrismaClient;
}
