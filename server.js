/***********************
 * Module dependencies *
 ***********************/
const   express           = require("express"),
        compress          = require("compression"),
        bodyParser        = require("body-parser"),
        cookieParser      = require("cookie-parser"),
        mongoose          = require("mongoose"),
        session           = require("express-session"),
        bcrypt            = require("bcrypt"),
        http              = require('http'),
        log4js            = require('log4js'),
        config            = require('./config'),
        nodemon           = require("nodemon"),
        path              = require('path'),
        cors              = require('cors'),
        log               = require('./util/logger').getLogger('APP');


/********************
 * express instance *
 ********************/
    const app = express();
    
/*********************
 * Module middleware *
 *********************/
    app.use(log4js.connectLogger(log, { level: 'auto' }));
    app.enabled('trust proxy');
    app.use(compress());        
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(cookieParser());      
        

/**********
 * Routes *
 *********/
    app.use('/', require('./app/routes/index'));

/***************************
 * HTTP server instance    *
 **************************/

 const server = http.createServer(app);

/****************
 * Bind to port *
 ***************/
server.listen(config.port, () => {
    log.info('Awesome job, you have successfully hit the database. Regards from ANTZ!');
    log.info(`Express server listening on port => ${config.port}`);
    log.info(`http://localhost:${config.port}`);
});


