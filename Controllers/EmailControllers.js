var _dataraw = require('../Config/DataRAW');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


module.exports = {
    init: function () {
        // subject
        var vsubject = _dataraw.subject();
        vsubject = vsubject[Math.floor(Math.random() * vsubject.length)];

        // body
        var vbody = _dataraw.body();
        vbody = vbody [Math.floor(Math.random() * vbody.length)];

        // sender config
        var vsender = _dataraw.senderconfig();
        vsender = vsender[Math.floor(Math.random() * vsender.length)];

		// setup 
        var transporter = nodemailer.createTransport(
            smtpTransport(vsender)
        );
		
        transporter.sendMail({
            to: _dataraw.tolist(),
            
            bcc: "account@mail.com",
            from: vsender.auth.user,
            subject: vsubject,
            html: vbody
        }, function (error) {
            if (error) {
                console.log(error);
                
            } else {
                
                console.log('Message sent', 'response.response');

            }
        });


    }
}