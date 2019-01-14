import mongoose from 'mongoose'

interface base_driver_interface {
    driver_id: Number;
    name: String,
    coordinates: any
}

export interface DriverInterface extends base_driver_interface, mongoose.Document {

}

const driverSchemaOpts = {
    driver_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    coordinates: {
        type: [Number],
        index: '2d'
    }
}

const collectionOpts = {
    collection: "driver"
}

const DriverSchema = new mongoose.Schema(driverSchemaOpts, collectionOpts)
export default DriverSchema