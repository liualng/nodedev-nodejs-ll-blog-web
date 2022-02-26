const express = require('express');
const {
  Nuxt,
  Builder
} = require('nuxt');
const config = require('./config.json');
const PORT = config.port || 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();


// connect to mongodb
const mongodbUrl = config.mongodbBaseUrl + `users?authSource=${config.mongodbAuthSource}`;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log('数据库连接成功')
}).catch(err => {
  console.log(err, '数据库连接失败')
});

const userApi = require('./routes/api/users');
const router = require('./routes/index');

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

app.use((req, res, next) => {
  console.log(`method:${req.method}  url:${req.originalUrl}`);
  req.app = { locals: { config } }
  next();
})


app.use('/api/users', userApi)
app.use('/', router)


const nuxtConfig = require('./nuxt.config');
const nuxt = new Nuxt(nuxtConfig);
if (process.env.NODE_ENV !== 'production') {
  const builder = new Builder(nuxt);
  builder.build()
}

app.use(nuxt.render);

app.listen(PORT, () => {
  console.log(`server is start,port is:${PORT}`)
});
