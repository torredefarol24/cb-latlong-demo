import { Request, Response } from 'express'

const saveDriverPosition = (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "Hello",
        data: null
    }

    var driverId = request.params.id
    var latLong = JSON.parse(request.query.lat_long)

    context.data = {
        driver_id: driverId,
        lat_long: latLong
    }

    return response.status(200).json(context)
}

export default saveDriverPosition