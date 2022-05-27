const mongoose$ = require('mongoose');

const EmployeeModel = new mongoose$.model('Employee', {
    personalInformation: {
        'title': { type: String },
        'firstName': { type: String },
        'lastName': { type: String },
        'personalEmail': { type: String },
        'dateOfBirth': { type: Date },
        'gender': { type: String },
        'phoneNumber': { type: Number, maxlength: 10 },
        'password': { type: String }
    },
    address: {
        'dNo': { type: String },
        'streetName': { type: String },
        'addresslineTwo': { type: String },
        'country': { type: String },
        'state': { type: String },
        'city': { type: String },
        'zipCode': { type: Number, maxlength: 6 }
    },
    organization: {
        'empId': { type: String },
        'designation': { type: String },
        'organizationName': { type: String },
        'primarySkills': [ String ]
    },
    uploadImage: {
        empImg: [ mongoose$.Schema.Types.Mixed ]
    },
    registeredDate: { type: Date },
    isVerifiedEmail: { type: Boolean }
}, 'Employee_Registration')

module.exports = { EmployeeModel };