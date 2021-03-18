const express = require('express');
const app = express();
const {config} = require('./config');
const {
   homePageRouter,
} = require('./src/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("views", "views");
app.set("view engine", "hbs");

// Los routers se agregan a las rutas
app.use('/', homePageRouter);

app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});