import app from './app';
import './config/config.database'

app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});