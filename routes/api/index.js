const express = require('express');
const {
  route
} = require('..');

const router = express.Router();

// 登陆
router.post('/loginaccount', (req, res) => {
  const {
    username,
    userpwd
  } = req.body;
  if (username === "liulang" && userpwd === '092766') {
    req.session.isLogin = true;
    req.session.username = username;
    res.json({
      success: true,
      description: '登陆成功'
    });
  } else {
    res.json({
      success: false,
      description: '账号或秘密错误'
    });
  }
});


//注册
router.post('/registeraccount', (req, res) => {
  const {
    username,
    userpwd
  } = req.body;
  res.json({
    success: true,
    description: '注册成功，请登陆'
  });

})



module.exports = router;
