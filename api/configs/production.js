//Server
process.srv         = {};
process.srv.env     = 'production';
process.srv.host    = 'localhost';
process.srv.port    = process.env.NODE_PORT || 8000;

//Database
process.db          = {};
process.db.host     = 'localhost';
process.db.database = 'qfs_prod';
process.db.username = 'qfs_prod';
process.db.password = 'qfs_prod';
process.db.dialect  = 'mysql';
process.db.logging  = false;