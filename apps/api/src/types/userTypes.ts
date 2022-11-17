import { AdminUser } from "@prisma/client"

type AdminUserData = Omit<AdminUser, "id" | "createdAt" | "updatedAt" | "deletedAt">

export { AdminUserData }
