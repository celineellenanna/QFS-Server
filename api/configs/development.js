//Server
process.srv         = {};
process.srv.env     = 'development';
process.srv.host    = 'localhost';
process.srv.port    = process.env.NODE_PORT || 3000;

//Database
process.db          = {};
process.db.host     = 'localhost';
process.db.database = 'qfs_dev';
process.db.username = 'qfs_dev';
process.db.password = 'qfs_dev';
process.db.dialect  = 'mysql';
process.db.logging  = false;