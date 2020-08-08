const express = require('express');
const bodyParser = require('body-parser');

const commentRouter = express.Router();

commentRouter.use(bodyParser.json());

