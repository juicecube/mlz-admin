#!/usr/bin/env node
const path = require('path');
const express = require('express');
const compression = require('compression');

const cwd = process.cwd();
const dist = path.join(cwd, 'dist');
const app = express();

app.use(compression());
app.use(express.static(dist));
app.use((req, res) => res.sendFile(path.resolve(dist, 'index.html')));

const port = 5000;
app.listen(port, () => {
  console.log('✅ ...expressed on Port: %j', port);
});
