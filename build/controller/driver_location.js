"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saveDriverPosition = function (request, response) {
    var context = {
        success: true,
        message: "",
        data: null
    };
    return response.status(200).json(context);
};
exports.default = saveDriverPosition;
//# sourceMappingURL=driver_location.js.map