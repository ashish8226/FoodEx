const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
mongoose.connect("mongodb+srv://Ashish042:2JXP7pnXyDkDHWKo@cluster0-6seuh.mongodb.net/RestaurentDB?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database');
  }).catch(() => {
  console.log('connection failed!!');
});

const menus = require('./routes/menus');
const chefs = require('./routes/chefs');
const blogs=require('./routes/blogs');
const orders=require('./routes/orders');
const tables=require('./routes/tables');
const users=require('./routes/users');
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
  {extended: false}
));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
})

app.use('/api/menus', menus);
app.use('/api/chefs', chefs);
app.use('/api/blogs',blogs);
app.use('/api/orders',orders);
app.use('/api/tables',tables);
app.use('/api/users',users);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;
