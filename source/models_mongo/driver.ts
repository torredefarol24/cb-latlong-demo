import DriverSchema, { DriverInterface } from '../schemas/driver'
import mongoose from 'mongoose'

const Driver = mongoose.model<DriverInterface>("Driver", DriverSchema)

export default Driver