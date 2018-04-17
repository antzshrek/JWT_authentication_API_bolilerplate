/************************************
 * DemoProduct                      *
 * Copyright(c) 2018 Reuben Antz    *
 * MIT Licensed                     *
 ***********************************/


const   config              = require('./config'),
        mongoose            = require('mongoose'),
        log                 = require('utils/logger').getLogger('APP');

  mongoose.Promise = config.mongoose.Promise;
  
  mongoose.connect(config.mongoose.connection, {useMongoClient: true})
      .then(() => {
          log.info('Connected to mongodb!');
          require('./server.js');
      })
      .catch(err => {
          log.error(err.message, err.name);                                                       
      });
      
      if(!config.jwt.secret || config.jwt.secret === 'SOMETHINGELSE'){utils.warn("No jwt secret key specified")};  
