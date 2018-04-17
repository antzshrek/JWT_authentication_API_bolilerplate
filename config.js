module.exports = {
    port: process.env.PORT || 3000,
    mongoose: {
    options: {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
    },
        Promise: require('bluebird'), //mongoose promise library
        connection: 'mongodb://localhost:27017/antz', //this line should be commented when wanting to run locally.
	    //connection: 'url to the database you will love to use' //feel free to use any database you feel comfortable with. e.g mlab
        
    },
    jwt: {
        secret: 'this1N@keY', //secret key for jwt auth
        options: {
            expiresIn: '10 days'
        },
    },
    winston: {
        writeToConsole: true, //enable writing to console
        writeToFile: true, //enable writing to file

        file: { //file writing config
            filename: `./app/logs/${(new Date()).getDate()}-${(new Date()).getMonth()}-${(new Date()).getFullYear()}.log`, //where the log file will be written
            json: false,
        },
        console: {
            colorize: true,
            //... for more config options see https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport
        },

    },
    messages: {
        EMAIL_NOT_UNIQUE: 'Email is not unique',
        NO_DATA: 'Not enough data!',
        INVALID_CREDENTIALS: 'Wrong email or password!',
        INVALID_TOKEN: 'Invalid token!',
        NO_TOKEN_PROVIDED: 'You are not authenticated!',
    }
};
