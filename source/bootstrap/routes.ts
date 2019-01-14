import routes from '../routes'

const setupAppRoutes = (app: any) => {
    app.use("/drivers", routes.driverLocation)
    app.use("/calc", routes.calcDist)
}

export default setupAppRoutes