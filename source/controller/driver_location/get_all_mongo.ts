import { Request, Response } from 'express'
import Driver from '../../models_mongo/driver'

const getAllDrivers_Mongo = (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "",
        data: null
    }

    Driver.find()
        .select("-__v")
        .then(drivers => {
            if (drivers.length > 0) {
                context.message = "Fetched Drivers from DB"
                context.data = drivers
            } else {
                context.message = "There are no drivers in MongoDB"
                context.data = []
            }
            return response.status(200).json(context)
        })
        .catch(error => {
            context.message = error
            context.success = false
            return response.status(500).json(context)
        })
}

export default getAllDrivers_Mongo