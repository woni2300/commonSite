const express = require('express'); // Express 프레임워크 로드
const bodyParser = require('body-parser'); // HTTP 요청 바디를 파싱하기 위한 미들웨어 로드
const app = express(); // Express 애플리케이션 인스턴스 생성
const port = process.env.PORT || 5000; // 서버 포트 설정 (기본: 5000)

// Body-parser 미들웨어 설정
app.use(bodyParser.json()); // JSON 형태의 요청 바디를 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형태의 요청 바디를 파싱

// 데이터베이스 설정 로드
const fs = require('fs'); // 파일 시스템 모듈 로드
const data = fs.readFileSync('./database.json'); // database.json 파일 읽기
const conf = JSON.parse(data); // JSON 파싱
const mysql = require('mysql'); // MySQL 모듈 로드

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

// MySQL 데이터베이스 연결
connection.connect();

// 파일 업로드를 처리하기 위한 Multer 설정
const multer = require('multer');
const upload = multer({ dest: './upload' }); // 업로드된 파일이 저장될 디렉토리 지정


// 서버 시작
app.listen(port, () => console.log(`Listening on port ${port}`)); // 지정된 포트에서 서버 실행
