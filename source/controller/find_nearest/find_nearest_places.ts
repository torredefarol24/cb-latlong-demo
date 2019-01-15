import { Request, Response } from 'express'
import Driver from '../../models_mongo/driver'

const findNearestPlaces = async (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "Closest Nodes",
        data: null
    }

    var lngLat = JSON.parse(request.query.lng_lat)

    const findOpts = {
        "coordinates": {
            $near: [lngLat[0], lngLat[1]]
        }
    }
    var drivers = await Driver.find(findOpts).select("-__v")

    context.data = {
        long_lat: lngLat,
        nearest_places: drivers
    }

    return response.status(200).json(context)
}

export default findNearestPlaces