import { Router } from "express"

const carRouter = Router()

carRouter.use("/cars").get("/").post("/").put("/").delete("/")

export default carRouter
