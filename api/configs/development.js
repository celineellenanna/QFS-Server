//Server
process.srv             = {};
process.srv.env         = 'development';
process.srv.host        = 'localhost';
process.srv.port        = process.env.NODE_PORT || 8000;

//Database
process.db              = {};
process.db.host         = 'localhost';
process.db.database     = 'qfs_dev';
process.db.connection   = 'mongodb://' + process.db.host + '/' + process.db.database;