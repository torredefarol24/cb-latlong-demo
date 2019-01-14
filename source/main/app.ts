import express from 'express'
import bodyParserSetup from '../bootstrap/bodyParser'
import MongoDBSetup from '../bootstrap/mongoDBSetup'
import routeSetup from '../bootstrap/routes'
import MYSQLDBSetup from '../bootstrap/mysqlDBSetup'

class LatLong_App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.connectToMongo()
        this.connectToMYSQL()
        this.setupBodyParser(this.app)
        this.setupRoutes(this.app)
    }

    setupBodyParser(app: any) {
        bodyParserSetup(app)
    }

    connectToMongo() {
        MongoDBSetup
    }

    connectToMYSQL() {
        MYSQLDBSetup
    }

    setupRoutes(app: any) {
        console.log("Route Setup")
        routeSetup(app)
    }
}

const apiApp = new LatLong_App()
export default apiApp.app