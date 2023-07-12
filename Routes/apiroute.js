const apiData = require('../controller/api');

const apiroute=require('express').Router();
apiroute.get('/data',apiData)
// apiroute.get('/bollywood',bollyData)
// apiroute.get('/hollywood',hollyData)
// apiroute.get('/fitness',fitnessData)
// apiroute.get('/food',foodData)
// apiroute.get('/technology',techData)

module.exports= apiroute;