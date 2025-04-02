const mysql = require('mysql2');
require('dotenv').config(); // .env を読み込む
// MySQLの接続情報
const pool = mysql.createPool({
  host: process.env.DB_HOST,     // ホスト名（例: localhost）
  user: process.env.DB_USER,     // ユーザー名
  password: process.env.DB_PASS, // パスワード
  database: process.env.DB_NAME, // データベース名
  waitForConnections: true,
  connectionLimit: 10,  // 同時接続数の上限
  queueLimit: 0
});
// プールをPromiseで扱えるようにする
const promisePool = pool.promise();
module.exports = promisePool;
