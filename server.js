const express = require('express');
const path = require('path');
const fs = require('fs');
const api = requrie('./routes/apiRoutes.js');
const html = require('/routes/htmlRoutes.js');

const PORT = 3001;

const app = express();