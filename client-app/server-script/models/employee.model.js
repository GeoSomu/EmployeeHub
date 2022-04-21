const mongoose$ = require('mongoose');

var EmployeeModel = new mongoose$.model('Employee', {
  title: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  personalEmail: { type: String },
  phoneNumber: { type: Number },
  dateOfBirth: { type: Date },
  password: { type: String },
  employeeId: { type: String },
  organizatioName: { type: String },
  organizationEmail: { type: String },
  permenentAddress: {
    no: { type: String },
    streetName: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pinCode: { type: Number }
  },
  uploadedImage: { type: String },
  agreeTermsAndConditions: { type: Boolean }
}, 'employeehub_reg');

module.exports = { EmployeeModel };
