const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const index = require("./indexController");

const app = express();
app.use(cors());
app.use(cookieParser());

/* 미들웨어 설정 */
app.use(express.json()); // body 값을 파싱
app.use(express.urlencoded({ extended: true })); //form 으로 제출되는 값 파싱, Express 4.16 버전 이하에서는 body-parser 모듈을 불러와서 설정했으나, 이후 내장 모듈로 포함됐기 때문에 별도의 모듈을 설치할 필요는 없음.

app.get("/", index.greeting);
app.post("/login", index.login);

app.listen(3010);
