import singUp from './email/signup';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

