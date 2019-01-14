import { Router } from 'express'
import DistanceController from '../controller/distance_calculator/'

const router = Router()

router.post("/dist", DistanceController.calcDist)


export default router