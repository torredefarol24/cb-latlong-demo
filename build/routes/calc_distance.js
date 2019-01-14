"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var distance_calculator_1 = __importDefault(require("../controller/distance_calculator/"));
var router = express_1.Router();
router.post("/dist", distance_calculator_1.default.calcDist);
exports.default = router;
//# sourceMappingURL=calc_distance.js.map