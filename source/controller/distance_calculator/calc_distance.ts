import { Request, Response } from 'express'

const calcDistance = (request: Request, response: Response) => {
    var context: any = {
        success: true,
        message: "Hey Everyone",
        data: null
    }

    var latLong = JSON.parse(request.query.lat_long)

    context.data = {
        lat_long: latLong
    }

    return response.status(200).json(context)
}

export default calcDistance