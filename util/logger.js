
var log4js = require('log4js');

function logger() {

    const config = {
        appenders: {
            out: {
                type: 'console'
            }
        },
        categories: {
            default: {
                appenders: ['out'],
                level: 'debug'
            }
        }
    }

    log4js.configure(config);

    return {
        getLogger: function(category) {
            return log4js.getLogger(category);
        }
    };
}

module.exports = logger();
