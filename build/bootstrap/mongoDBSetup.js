"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongo_connection_str_1 = __importDefault(require("../keys/mongo_connection_str"));
var connectCallback = function () { return console.log("MongoDB Connection Successful"); };
var errorCallback = function (err) { return console.error("Mongo Connection Error " + err); };
var connOpts = {
    useNewUrlParser: true
};
var connectToMongoDB = mongoose_1.default.connect(mongo_connection_str_1.default, connOpts)
    .then(connectCallback)
    .catch(function (err) { return errorCallback(err); });
exports.default = connectToMongoDB;
//# sourceMappingURL=mongoDBSetup.js.map