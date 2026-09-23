const express = require('express');

const authRoutes = require('./routes/authRoutes');
// const testRoutes = require('./routes/testRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "Digital Banking System API is running"
  });
});

app.use('/api/auth', authRoutes);
// app.use('/api/test', testRoutes);

module.exports = app;