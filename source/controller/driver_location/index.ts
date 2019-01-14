import saveDriverPosition from './driver_location'
import getAllDrivers_Mongo from './get_all_mongo'
import getAllDrivers_Mysql from './get_all_mysql'

const DriverController = {
    saveLocation: saveDriverPosition,
    getAllDrivers_Mongo: getAllDrivers_Mongo,
    getAllDrivers_Mysql: getAllDrivers_Mysql
}

export default DriverController