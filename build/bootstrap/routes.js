"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../routes"));
var setupAppRoutes = function (app) {
    app.use("/drivers", routes_1.default.driverLocation);
    app.use("/calc", routes_1.default.calcDist);
};
exports.default = setupAppRoutes;
//# sourceMappingURL=routes.js.map