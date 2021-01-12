const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
const bodyParser = require('body-parser');

const Sequelize = require('sequelize');
const sequelize = require('./utils/databse');

var path = require('path');
app.use(express.static(path.join(__dirname, "/uploads")));

// our server instance
const server = http.createServer(app);

const Services = require('./models/servicesModel');
const Portfolio = require('./models/portfolioModel');
const Info = require('./models/infoModel');
const Contact = require('./models/contactModel');
const Admin = require('./models/adminModel');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const servicesRoute = require('./routes/servicesRoute');
app.use("/jd_server/services", servicesRoute);

const portfolioRoute = require('./routes/portfolioRoute');
app.use("/jd_server/portfolio", portfolioRoute);

const infoRoute = require('./routes/infoRoute');
app.use("/jd_server/info", infoRoute);

const contactRoute = require('./routes/contactRoute');
app.use("/jd_server/contact", contactRoute);

const adminRoute = require('./routes/adminRoute');
app.use("/jd_server/admin", adminRoute);


app.use((req, res) => {
    res.send("JD SERVER - Page Not Found");
})

// User.hasMany(Post);
// User.hasMany(Album);
// User.hasMany(Todo);

sequelize.sync().then(result => {
    server.listen(5000);
}).catch(err => {
    // res.send("JD SERVER - Error on listening to server");
})