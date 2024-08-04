const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const userRoutes = require('./routes/users.routes');
app.use(express.json());
app.use(userRoutes);
dotenv.config();

mongoose.connect(`mongodb//:${process.env.URL}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log("server listening on: http://localhost:3000"));