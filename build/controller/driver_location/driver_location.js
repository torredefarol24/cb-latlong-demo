"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saveDriverPosition = function (request, response) {
    var context = {
        success: true,
        message: "Hello",
        data: null
    };
    var driverId = request.params.id;
    var latLong = JSON.parse(request.query.lat_long);
    context.data = {
        driver_id: driverId,
        lat_long: latLong
    };
    return response.status(200).json(context);
};
exports.default = saveDriverPosition;
//# sourceMappingURL=driver_location.js.map