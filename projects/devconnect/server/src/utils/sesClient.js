//sesClient dependencie of ses SendEmail
const { SESClient } = require("@aws-sdk/client-ses");
// Set the AWS Region.
const REGION = "ap-south-1";  // re write acccor
// Create SES service object.
const sesClient = new SESClient({ 
    region: REGION, credentials:{
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretaccessKeyId: process.env.AWS_SECRET_KEY, 
    }

});
modules.export = { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]