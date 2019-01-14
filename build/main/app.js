"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser_1 = __importDefault(require("../bootstrap/bodyParser"));
var mongoDBSetup_1 = __importDefault(require("../bootstrap/mongoDBSetup"));
var routes_1 = __importDefault(require("../bootstrap/routes"));
var LatLong_App = /** @class */ (function () {
    function LatLong_App() {
        this.app = express_1.default();
        this.connectToMongo();
        this.setupBodyParser(this.app);
        this.setupRoutes(this.app);
    }
    LatLong_App.prototype.setupBodyParser = function (app) {
        bodyParser_1.default(app);
    };
    LatLong_App.prototype.connectToMongo = function () {
        mongoDBSetup_1.default;
    };
    LatLong_App.prototype.setupRoutes = function (app) {
        console.log("Route Setup");
        routes_1.default(app);
    };
    return LatLong_App;
}());
var apiApp = new LatLong_App();
exports.default = apiApp.app;
//# sourceMappingURL=app.js.map