"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcDistance = function (request, response) {
    var context = {
        success: true,
        message: "Hey Everyone",
        data: null
    };
    var latLong = JSON.parse(request.query.lat_long);
    context.data = {
        lat_long: latLong
    };
    return response.status(200).json(context);
};
exports.default = calcDistance;
//# sourceMappingURL=calc_distance.js.map