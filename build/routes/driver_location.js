"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var driver_location_1 = __importDefault(require("../controller/driver_location/"));
var router = express_1.Router();
router.post("/:id", driver_location_1.default.saveLocation);
exports.default = router;
//# sourceMappingURL=driver_location.js.map