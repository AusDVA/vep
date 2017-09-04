import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = "your site key"; // to do, create environment variable

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
  input: React.PropTypes.object.isRequired 
     
};


export default Captcha;



