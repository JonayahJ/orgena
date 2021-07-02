const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.emailContact = (req, res) => {
    // res.json({
    //     data: 'You hit API from controllers!'
    // });
    console.log(req.body)
};