import { Router } from 'express'
import DriverController from '../controller/driver_location/'

const router = Router()

router.get("/mysql", DriverController.getAllDrivers_Mysql)
router.get("/mongo", DriverController.getAllDrivers_Mongo)
router.post("/:id", DriverController.saveLocation)

export default router