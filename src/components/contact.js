import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import Captcha from "./partials/captcha";


import axios from "axios";

class Contact extends React.Component {

  constructor(props) {
   super(props);
   this.state = {success: false,
                 error: false,
                 loading: false};
}

  renderField(field) {
    const {meta: {touched,error}} = field;
    const className = `form-group${touched && error ? ' has-error' : ''}`;

    return (
      <div className="col-md-12 form-group required">
        <div className={className}>
          <label className="control-label" htmlFor={field.id}>{field.label}</label>
          <input className="form-control" id={field.id}{...field.input} type="text" placeholder={field.placeholder}/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>

    );
  }

  renderFeedback(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group${touched && error ? ' has-error' : ''}`;

    return (
      <div className="col-md-12 form-group required">
        <div className={className}>
          <label className="control-label" htmlFor={field.id}>{field.label}</label>
          <textarea className="form-control" id={field.id} {...field.input} placeholder={field.placeholder} rows="4"/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>
    );
  }

  onChange(response) {
    this.setState({captcha: response})
    console.log(response);
  };

  onSubmit(values) {

    console.log(values);
    this.setState({success: false, error: false, loading: true});

    axios.post("http://localhost:8181/contactus", values)
      .then((response) => {
        this.setState({loading: false, success: true, error: false});
        this.props.reset(values);
        grecaptcha.reset();

      })
      .catch((error) => {
        console.log("error while posting data", error);
        this.setState({loading: false, success: false, error: true});
        console.log(error);
      });
  }
  render() {
    const {handleSubmit} = this.props;
   
    
    return (
      <div>
        <section>
          <div id ="content" tabIndex="-1" autoFocus className="container no-border">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact Us</h1>
                <div className="col-md-7 col-sm-6">
                  <form>
                    <Field aria-required="true" name="name" id="name" label="Name:" placeholder="ex. John Smith" component={this.renderField}/>
                    <Field aria-required="true" name="email" id="email" label="Email:" placeholder="ex. john.smith@example.com" component={this.renderField}/>
                    <Field aria-required="true" name="phone" id="phone" placeholder="ex. 0412 345 678" label="Phone:" component={this.renderField}/>
                    <Field aria-required="true" name="message" id="message" label="Message:" component={this.renderFeedback}/>              
                    <Field name="captcha"component={Captcha} onChange={this.onChange.bind(this)}/>
                   

                    <div className="col-md-2 break">
                      <button className="btn btn-default" onClick={handleSubmit(this.onSubmit.bind(this))} type="button">Submit</button>
                    </div>
                   
                    <div className="col-md-10 break">
                      <div className= { this.state.loading ? "alert alert-info" : "alert alert-info hidden"}>
                        <i className="fa fa-circle-o-notch fa-spin"></i> Sending feedback email.</div>


                    <div className= { this.state.success ? "alert alert-success" : "alert alert-success hidden"}>
                      <strong>Success!</strong> We have received your feedback and will get back to you shortly.
                    </div>

                   <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
                      <strong>Error!</strong> Unfortunatly there has been an error, try submitting again.
                                              If the problem still persists you can directly send your feedback
                                              to <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
                    </div>
                  </div>
              

                  </form>
                </div>
                <div className="col-md-5 col-sm-6">

                  <h2 className="contact-subheader" aria-hidden="true">General enquiries (8am-5pm, Monday-Friday)</h2>
                  <h2 className="sr-only">General enquiries (8am-5pm, Monday-Friday)</h2>
                  <p><span className="head">Telephone: </span>133 254 </p>
                  <p><span className="head">Regional callers: </span>1800 555 254 </p>
                  <p><span className="head">International callers: </span>61 2 6289 1133 </p>

                  <h2 className="contact-subheader">Postal address</h2>
                    <p>Department of Veterans' Affairs</p>
                    <p>GPO Box 9998</p>
                    <p>Canberra ACT 2601</p>

                  <h2 className="contact-subheader">Email</h2>
                   <p><a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a> </p>

                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  }

  if (!values.email && !values.phone) {
    errors.email = 'Please provide an email address or phone number.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && !values.phone) {
    errors.email = 'Invalid email address.'
  }

  if (!values.phone && !values.email) {
    errors.phone = "Please provide a phone number or an email address.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  if (!values.captcha) {
    errors.captcha = "Invalid Captcha";
  }

  return errors;

}

export default reduxForm({
  validate, form: 'feedbackForm' // a unique identifier for this form
})(Contact)
