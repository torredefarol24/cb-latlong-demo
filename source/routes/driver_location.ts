import { Router } from 'express'
import DriverController from '../controller/driver_location/'
import FindNearestController from '../controller/find_nearest'

const router = Router()

router.get("/mysql", DriverController.getAllDrivers_Mysql)
router.get("/mongo", DriverController.getAllDrivers_Mongo)

router.post("/nearest", FindNearestController.findNearest)
router.post("/:id", DriverController.saveLocation)

export default router