const express = require('express');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

//init middleware
app.use(express.json());
app.use(express.urlencoded());

//Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blogs'));


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('server running');
});
