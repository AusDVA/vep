import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

const URL = location.protocol + "//" + location.hostname;

if (URL == "http://localhost") {
  var SITE_KEY = "6Le_bS0UAAAAADQ60ar1SLU-w-Q_pftEV91VVq1z";
}

else {
  var SITE_KEY = "6Lc9tC0UAAAAAFnez6vux4tQ36WC8hlJOesHKrEt";
}

const Captcha = (props) => (

  <div className = "col-md-12">
    <ReCAPTCHA
      sitekey={SITE_KEY}
      onChange= {response => props.input.onChange(response)}
    />
     <span className="text-danger">
        {props.meta.touched && props.meta.error}
      </span>
    </div>
);


Captcha.propTypes = {
  input: PropTypes.any.isRequired
};


export default Captcha;
