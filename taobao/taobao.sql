SET NAMES UTF8;
DROP DATABASE IF EXISTS wd;
CREATE DATABASE wd CHARSET=UTF8;
USE wd;
CREATE TABLE wd_dress(
    did INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128) NOT NULL,
    price DECIMAL(10,2)
);
INSERT INTO wd_dress VALUES(NULL,'婚纱礼服2018新款春季新娘一字肩齐地韩式修身显瘦蓬蓬裙宫廷蕾丝','828.00');
CREATE TABLE wd_dress_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    dress_id INT,
    FOREIGN KEY(dress_id) REFERENCES wd_dress(did),
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128)
);
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm.jpg','img/details/md.jpg','img/details/lg.jpg');
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm2.jpg','img/details/md2.jpg','img/details/lg2.jpg');
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm.jpg','img/details/md.jpg','img/details/lg.jpg');
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm2.jpg','img/details/md2.jpg','img/details/lg2.jpg');
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm.jpg','img/details/md.jpg','img/details/lg.jpg');
INSERT INTO wd_dress_pic VALUES(NULL,1,'img/details/sm2.jpg','img/details/md2.jpg','img/details/lg2.jpg');
CREATE TABLE wd_dress_users(
    upid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(16),
    email VARCHAR(64)
);
INSERT INTO wd_dress_users VALUES(NULL,"Tom","123456","13612345678","tom@qq.com");
INSERT INTO wd_dress_users VALUES(NULL,"Jerry","123456","13612345679","jerry@qq.com");
INSERT INTO wd_dress_users VALUES(NULL,"Lucy","123456","13612345680","lucy@qq.com");
/*CREATE TABLE wd_index_carousel(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(128),
    title VARCHAR(128),
    href VARCHAR(128)
);
INSERT INTO wd_index_carousel VALUES(NULL,'','','');
CREATE TABLE wd_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(16),
    email VARCHAR(64),
    user_name VARCHAR(32),
    gender BOOL
)
INSERT INTO wd_user VALUES(NULL,'','','','','','1');
*/