var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ranjithsundar3@gmail.com',
    pass: 'Ranjith@123'
  }
});

var mailOptions = {
  from: 'ranjithsundar3@gmail.com',
  to: 'ranjithsundar10@rediffmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});