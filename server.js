const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Simple Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to daniil app." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Set Port, listen to requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

const db = require("./app/models");
db.sequelize.sync();
// const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user"
//     });
   
//     Role.create({
//         id: 2,
//         name: "moderator"
//     });
   
//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// }