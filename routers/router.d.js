const router$ = require('express').Router();
const dotenv$ = require('dotenv');
dotenv$.config();

const { 
    getAllEmployeeData, 
    saveEmployeeData,
    getEmployeeDataById 
} = require('../controllers/employee.controller');

router$.get(`${process.env.API_ACTION_URL_BASE}/getAllEmployeeData`, getAllEmployeeData);

router$.post(`${process.env.API_ACTION_URL_BASE}/saveEmployeeData`, saveEmployeeData);

router$.get(`${process.env.API_ACTION_URL_BASE}/getEmployeeDataById`, getEmployeeDataById);

/**
 * @exports router$ 
 */

module.exports = { router$ }