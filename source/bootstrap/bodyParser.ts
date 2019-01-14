import * as bodyParser from 'body-parser'

const bodyParserSetup = (app: any) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
}

export default bodyParserSetup

