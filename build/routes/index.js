"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var driver_location_1 = __importDefault(require("./driver_location"));
var calc_distance_1 = __importDefault(require("./calc_distance"));
var routes = {
    driverLocation: driver_location_1.default,
    calcDist: calc_distance_1.default
};
exports.default = routes;
//# sourceMappingURL=index.js.map