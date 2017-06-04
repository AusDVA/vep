var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contactus', function (req, res) {
  console.log("express server received values. Name: " + req.body.name +
              " Email: " + req.body.email +
              " Phone: " + req.body.phone +
              " Message: " + req.body.message);

              let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: 'email@gmail.com',
                  pass: 'pass1234'
              }
          });

          // setup email data
          let mailOptions = {
              from: 'noreply <noreply@noreply.com>', // sender address
              to: 'yourtestemail@testemail.com', // list of receivers
              subject: 'feedback received from: ' + req.body.name, // Subject line
              text: 'You have received feedback from ' + req.body.name +
                    ' The feedback message received is: ' + req.body.message +
                    ' The client can be contacted on: ' + req.body.email + ' or ' + req.body.phone  , // plain text body

              html: '<div style="font-size: 18px;" >' +
                    '<p>Feedback received from: ' + req.body.name + '</p>' +
                    '<p>The feedback message is :  ' +req.body.message + '</p>' +
                    '<p>The client can be contacted on... </p>'+
                    '<p>Phone: ' + req.body.phone + '</p>' +
                    '<p>Email: ' + req.body.email + '</p>' + '</div>'// html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
          });



});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
