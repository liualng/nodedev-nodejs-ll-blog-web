const express = require('express');
const {
  Nuxt,
  Builder
} = require('nuxt');
const config = require('../config.json');
const PORT = config.port || 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

const api = require('../routes/api/index');
const router = require('../routes/index');

// session
app.use(session({
  // 加密初始值
  secret: 'fsdfsf',
  resave: false,
  // cookie配置
  cookie: {
    maxAge: 7 * 24 * 60 * 1000
  },
  saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());


// 设置配置数据
app.use((req, res, next) => {
  const {
    projectName,
    baseUrl
  } = config;
  req.app = {
    locals: {
      config: {
        projectName,
        baseUrl
      }
    }
  };
  next();
})

// api
app.use(api)
// 自定义路由
app.use('/', router)

// 构建nuxt对象
const nuxtConfig = require('../nuxt.config');
const nuxt = new Nuxt(nuxtConfig);

// 是否启用开发模式
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// 自定义路由写在上面
app.use(nuxt.render);

app.listen(PORT, () => {
  console.log(`server is start,port is:${PORT}`)
});
