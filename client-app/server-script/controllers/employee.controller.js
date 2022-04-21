const router$ = require('express').Router();

var { EmployeeModel } = require('../models/employee.model');

router$.get("/getAllEmployeeData", (req, res) => {
    EmployeeModel.find((err, docs) => {
        if(!err) {
            const obj = {
                Data: docs
            }
            res.send(obj);
        }
        else {
            res.json({
                "error": JSON.stringify(err)
            })
        }
    })
});

router$.post("/createNewEmployeeData", (req, res) => {
    var employeeModel = new EmployeeModel({
      title: req.body.title,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      personalEmail: req.body.personalEmail,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      password: req.body.password,
      employeeId: req.body.employeeId,
      organizatioName: req.body.organizatioName,
      organizationEmail: req.body.organizationEmail,
      permenentAddress: {
        no: req.body.permenentAddress.no,
        streetName: req.body.permenentAddress.streetName,
        city: req.body.permenentAddress.city,
        state: req.body.permenentAddress.state,
        country: req.body.permenentAddress.country,
        pinCode: req.body.permenentAddress.pinCode
      },
      uploadedImage: req.body.uploadedImage,
      agreeTermsAndConditions: req.body.agreeTermsAndConditions
    });
    employeeModel.save((err, docs) => {
        if(!err) {
            res.json({
                "success": true,
                "status": 200
            });

        }
        else {
            res.status(400);
        }
    });
});

module.exports = router$;
