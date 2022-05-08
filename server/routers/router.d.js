const router$ = require('express').Router();
const dotenv$ = require('dotenv');
dotenv$.config();

const { 
    getAllEmployeeData, 
    saveEmployeeData 
} = require('../controllers/employee.controller');

router$.get(`${process.env.API_ACTION_URL_BASE}/getAllEmployeeData`, getAllEmployeeData);

router$.post(`${process.env.API_ACTION_URL_BASE}/saveEmployeeData`, saveEmployeeData);

/**
 * @exports router$ 
 */

module.exports = { router$ }