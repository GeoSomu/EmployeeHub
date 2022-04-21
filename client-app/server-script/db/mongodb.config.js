const mongoose$ = require('mongoose');
const dbConn$ = "mongodb+srv://admin-ehub:Admin%40ehub2407$@cluster0.a862v.mongodb.net/EmployeeHub?retryWrites=true&w=majority";

mongoose$.connect(dbConn$, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connection Established...");
}).catch((err) => {
    console.log(JSON.stringify(err, undefined, 2));
});

module.exports = mongoose$
