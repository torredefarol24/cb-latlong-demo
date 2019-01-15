import { Request, Response } from 'express'
import Driver_Mongo from '../../models_mongo/driver'
import { Driver } from '../../models_mysql/driver'


const saveDriverPosition = async (request: Request, response: Response) => {

    var context: any = {
        success: true,
        message: "Driver Info Updated",
        data: null
    }

    var mysql_driver, mongo_driver
    var savedMysqlDriver, savedMongoDriver

    const driverId = parseInt(request.params.id)
    const lngLat = JSON.parse(request.query.lng_lat)

    const driverFindOptsMysql = {
        where: {
            id: driverId
        }
    }

    var mysqlFindResult = await Driver.find(driverFindOptsMysql)

    if (mysqlFindResult.length > 0) {
        mysql_driver = mysqlFindResult[0]

        mysql_driver.longitude = lngLat[0]
        mysql_driver.latitude = lngLat[1]
        savedMysqlDriver = await mysql_driver.save()

    } else {
        context.success = false
        context.message = "Driver not Found"
        return response.status(404).json(context)
    }




    const driverFindOptsMongo = {
        driver_id: driverId
    }

    var mongoFindResult = await Driver_Mongo.find(driverFindOptsMongo).select("-__v")


    if (mongoFindResult.length === 0) {
        mongo_driver = new Driver_Mongo()
    } else {
        mongo_driver = mongoFindResult[0]
    }

    mongo_driver.name = mysql_driver.name
    mongo_driver.driver_id = mysql_driver.id
    mongo_driver.coordinates = [lngLat[0], lngLat[1]]
    savedMongoDriver = await mongo_driver.save()

    context.data = {
        mysql_driver: savedMysqlDriver,
        mongo_driver: savedMongoDriver
    }

    return response.status(201).json(context)
}

export default saveDriverPosition