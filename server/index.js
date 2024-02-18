let http = require("http");
let cookie = require("cookie"); // 문자로 받는 쿠키 값을 객체로 바꿔줌

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "set-cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly",
        "Path=Path; Path=/cookie",
        "Domain=Domain; Domain=o2.org",
      ],
    });
    res.end("Cookie!");
  })
  .listen(3010);
