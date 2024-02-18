const USER_DATA = require("./data").USER_DATA;

exports.greeting = async function (req, res) {
  return res.send("hello! It is Node-js practice server.");
};

exports.login = async function (req, res) {
  const { id, password } = req.body;

  let isUser = false;

  for (let i = 0; i < USER_DATA.length; i++) {
    if (USER_DATA[i].userId === id && USER_DATA[i].password === password) {
      isUser = true;
      break;
    } else continue;
  }

  if (isUser) {
    const cookiesOption = {
      httpOnly: true,
      secure: false, //실무에서는 항상 true여야 함
    };
    return res.cookie("userId", id, cookiesOption).status(200).send();
  } else {
    return res.status(401).send("Not Authorized.");
  }
};
