const express$ = require('express');
const body_parser$ = require('body-parser');
const { mongoose$ } = require('./db/mongodb.config');
const dotenv$ = require('dotenv');
var employeeController = require('./controllers/employee.controller');
const cors$ = require('cors');


const __port__ = process.env.PORT || 8080;
const __app__ = express$();

dotenv$.config();


__app__.use(body_parser$.json());
__app__.use(body_parser$.urlencoded({ extended: true }))
// __app__.use(cors$({
//     origin: 'localhost:4200'
// }));

__app__.listen(__port__, async() => {
    console.log(`server started at http://localhost:${__port__}`);
});

__app__.use('/api/v1/employeehub', employeeController);
