"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./main/app"));
var app_port = process.env.PORT || 5000;
var listen_callback = function () { return console.log("Listening on " + app_port); };
app_1.default.listen(app_port, listen_callback);
//# sourceMappingURL=server.js.map