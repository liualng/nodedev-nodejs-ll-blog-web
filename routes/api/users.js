const express = require('express');
const router = express.Router();
const User = require('../../model/user');
// 登陆
router.post('/login', async (req, res) => {
  const {
    username,
    userpwd,
  } = req.body;
  const findResult = await User.findOne({
    name: username,
    password: userpwd
  });
  if (findResult) {
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
router.post('/register', (req, res) => {
  const {
    username,
    userpwd,
    useremail
  } = req.body;
  User.create({
    name: username,
    password: userpwd,
    email: useremail
  }).then(data => {
    console.log(data);
    res.json({
      success: true,
      description: '注册成功，请登陆'
    });
  }).catch(err => {
    console.log(err);
    res.json({
      success: false,
      description: '注册失败，请重新注册'
    });
  })
})



module.exports = router;
