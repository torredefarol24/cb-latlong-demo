import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Driver } from '../../models_mysql/driver'

const getAllDrivers_Mysql = async (request: Request, response: Response) => {
    const Drivers = getRepository(Driver)
    const drivers = await Drivers.find()

    var context: any = {
        success: true,
        message: "",
        data: null
    }

    if (drivers.length > 0) {
        context.message = "Fetched Drivers"
        context.data = drivers
    } else {
        context.message = "There are no Drivers in the MYSQL DB"
        context.data = []
    }

    return response.status(200).json(context)
}

export default getAllDrivers_Mysql
