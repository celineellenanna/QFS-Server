//Server
process.srv             = {};
process.srv.env         = 'production';
process.srv.host        = 'localhost';
process.srv.port        = process.env.NODE_PORT || 443;

//Database
process.db              = {};
process.db.host         = 'localhost';
process.db.database     = 'qfs_prod';
process.db.connection   = 'mongodb://' + process.db.host + '/' + process.db.database;