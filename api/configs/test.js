//Server
process.srv         = {};
process.srv.env     = 'test';
process.srv.host    = 'localhost';
process.srv.port    = process.env.NODE_PORT || 5000;

//Database
process.db          = {};
process.db.host     = 'localhost';
process.db.database = 'qfs_test';
process.db.username = 'qfs_test';
process.db.password = 'qfs_test';
process.db.dialect  = 'mysql';
process.db.logging  = true;