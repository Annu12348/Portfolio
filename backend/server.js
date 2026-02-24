import { config } from './src/config/config.js';
import debug from "debug"
import app from "./src/app.js"
import connectDataBase from './src/db/db.js';

const debuglog = debug("development:server")
connectDataBase()


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});