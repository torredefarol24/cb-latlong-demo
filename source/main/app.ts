import express from 'express'
import bodyParserSetup from '../bootstrap/bodyParser'
import MongoDBSetup from '../bootstrap/mongoDBSetup'
import routeSetup from '../bootstrap/routes'


class LatLong_App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.connectToMongo()
        this.setupBodyParser(this.app)
        this.setupRoutes(this.app)
    }

    setupBodyParser(app: any) {
        bodyParserSetup(app)
    }

    connectToMongo() {
        MongoDBSetup
    }

    setupRoutes(app: any) {
        console.log("Route Setup")
        routeSetup(app)
    }
}

const apiApp = new LatLong_App()
export default apiApp.app