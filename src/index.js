const express = require('express');
const route = require('./app/routes');
const db = require('./app/config/db')

// ConnectDB
db.connect()
const app = express();
const port = 4000;

// Sử dụng cho phương thức post
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


route(app);
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
