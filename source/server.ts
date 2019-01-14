import apiApp from './main/app'

const app_port = process.env.PORT || 5000
const listen_callback = () => console.log(`Listening on ${app_port}`)

apiApp.listen(app_port, listen_callback)