import { Request, Response } from 'express'
import Driver_Mongo from '../../models_mongo/driver'
import { Driver } from '../../models_mysql/driver'


const saveDriverPosition = async (request: Request, response: Response) => {

    var context: any = {
        success: true,
        message: "Driver Info Updated",
        data: null
    }

    var savedMysqlDriver, savedMongoDriver

    const driverId = parseInt(request.params.id)
    const lngLat = JSON.parse(request.query.lng_lat)

    const driverFindOpts = {
        where: {
            id: driverId
        }
    }

    let mysql_driver = await Driver.find(driverFindOpts)

    if (mysql_driver.length > 0) {
        mysql_driver[0].longitude = lngLat[0]
        mysql_driver[0].latitude = lngLat[1]
        savedMysqlDriver = await mysql_driver[0].save()

    } else {
        context.success = false
        context.message = "Driver not Found"
        return response.status(404).json(context)
    }

    let mongo_driver = new Driver_Mongo()
    mongo_driver.name = mysql_driver[0].name
    mongo_driver.driver_id = mysql_driver[0].id
    mongo_driver.coordinates = [lngLat[0], lngLat[1]]
    savedMongoDriver = await mongo_driver.save()

    context.data = {
        mysql_driver: savedMysqlDriver,
        mongo_driver: savedMongoDriver
    }

    return response.status(201).json(context)
}

export default saveDriverPosition