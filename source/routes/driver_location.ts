import { Router } from 'express'
import DriverController from '../controller/driver_location/'

const router = Router()

router.post("/:id", DriverController.saveLocation)

export default router