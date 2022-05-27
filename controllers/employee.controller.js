const { EmployeeModel } = require("../models/employee.model");
const dotenv$ = require('dotenv');

dotenv$.config();

const getAllEmployeeData = (req, res) => {
    const REQ_API_KEY = req.headers.x_ehub_api_key;
    if(REQ_API_KEY == process.env.X_EHUB_API_KEY){
        EmployeeModel.find((err, docs) => {
            if(!err){
                res.status(200);
                res.send(docs);
            }
            else {
                const resObj = {
                    'success': false,
                    'message': err.message,
                    'statusCode': err.status
                };
                res.status(400);
                res.send(resObj);
            }
        })
    }
    else {
        const resObj = {
            'message': 'Unauthorized',
            'statusCode': 401
        };
        res.status(401);
        res.send(resObj);
    }
}

const saveEmployeeData = (req, res) => {
    const REQ_API_KEY = req.headers.x_ehub_api_key;
    const empData = new EmployeeModel({
        personalInformation: {
            title: req.body.personalInformation?.title,
            firstName: req.body.personalInformation?.firstName,
            lastName: req.body.personalInformation?.lastName,
            personalEmail: req.body.personalInformation?.personalEmail,
            dateOfBirth: req.body.personalInformation?.dateOfBirth,
            gender: req.body.personalInformation?.gender,
            phoneNumber: req.body.personalInformation?.phoneNumber,
            password: req.body.personalInformation?.password
        },
        address: {
            dNo: req.body.address?.dNo,
            streetName: req.body.address?.streetName,
            addresslineTwo: req.body.address?.addresslineTwo,
            country: req.body.address?.country,
            state: req.body.address?.state,
            city: req.body.address?.city,
            zipCode: req.body.address?.zipCode
        },
        organization: {
            empId: req.body.organization?.empId,
            designation: req.body.organization?.designation,
            organizationName: req.body.organization?.organizationName,
            primarySkills: req.body.organization?.primarySkills
        },
        uploadImage: {
            empImg: req.body.uploadImage?.empImg
        },
        registeredDate: req.body?.registeredDate,
        isVerifiedEmail: req.body?.isVerifiedEmail

    });
    if(REQ_API_KEY == process.env.X_EHUB_API_KEY){
        empData.save((err, docs) => {
            if(!err) {
                const resObj = {
                       'sucess': true,
                       'statusCode': '200'
                    };
                res.status(200);
                res.send(resObj);
            }
            else {
                const resObj = {
                    'success': false,
                    'message': err.message,
                    'statusCode': err.status
                };
                res.status(400);
                res.send(resObj);
            }
        });
    }
    else {
        const resObj = {
            'message': 'Unauthorized',
            'statusCode': 401
        };
        res.status(401);
        res.send(resObj);
    }
}

const getEmployeeDataById = (req, res) => {
    const REQ_API_KEY = req.headers.x_ehub_api_key;
    if(REQ_API_KEY == process.env.X_EHUB_API_KEY) {
        const reqId = req.query._id;
        if(reqId){
            EmployeeModel.findById(reqId, (err, docs) => {
                if(!err){
                    res.status(200);
                    res.send(docs);
                }
                else {
                    const resObj = {
                        'success': false,
                        'message': err.message,
                        'statusCode': err.status
                    };
                    res.status(400);
                    res.send(resObj);
                }
    
            });
        }
        else {
            const resObj = {
                'success': false,
                'message': 'Invalid _ID',
                'statusCode': 400
            };
            res.status(400);
            res.send(resObj);
        }
        
    }
    else {
        const resObj = {
            'message': 'Unauthorized',
            'statusCode': 401
        };
        res.status(401);
        res.send(resObj);
    }
}

module.exports = { 
    getAllEmployeeData,
    saveEmployeeData,
    getEmployeeDataById
}