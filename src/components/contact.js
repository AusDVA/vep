import React from "react";
import {Field, reduxForm} from "redux-form";
import axios from "axios";

class Contact extends React.Component {

  constructor(props) {
   super(props);
   this.state = {success: false,
                 error: false,
                 loading: false,
                 disabled: false};

  }



  renderField(field) {
    const {meta: {touched,error}} = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className="col-md-12 form-group required">
        <div className={className}>
          <label className="control-label" htmlFor={field.label}>{field.label}</label>
          <input className="form-control" id= {field.label} {...field.input} type="text" placeholder={field.placeholder}/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>

    );
  }

  renderFeedback(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className="col-md-12 form-group required">
        <div className={className}>
          <label className="control-label" htmlFor={field.label}>{field.label}</label>
          <textarea className="form-control" {...field.input} type="text" id= {field.label} placeholder={field.placeholder} rows="4"/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.setState({
       success: false,
       error: false,
       loading: true,
       disabled: true
     });

axios.post("/contactus",{
    name: values.Name,
    email: values.Email,
    phone: values.Phone,
    message: values.Message
}).then((response)=> {
   console.log("Data submitted successfully");
   this.setState({
      loading: false,
      success : true
    })

}).catch((error)=> {
   console.log("got errr while posting data", error);
   this.setState({
      loading: false,
      error: true
    })
});

    //clear input after form submit.
    values.Name = "";
    values.Email = "";
    values.Phone = "";
    values.Message = "";
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <div className="subheader">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">

              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact Us</h1>
                <div className="col-md-7 col-sm-6">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field aria-label="Name" aria-required="true" name="Name" label="Name: " placeholder="ex. John Smith" component={this.renderField}/>
                    <Field aria-label="Email" aria-required="true" name="Email" label="Email: " placeholder="ex. john.smith@example.com" component={this.renderField}/>
                    <Field aria-label="Phone number" aria-required="true" name="Phone" placeholder="ex. 0412 345 678" label="Phone: " component={this.renderField}/>
                    <Field aria-label="Message" aria-required="true" name="Message" label="Message: " component={this.renderFeedback}/>

                    <div className="col-md-2 break-bottom">
                      <button disabled={ this.state.disabled ? "disabled" : ""}  className= { this.state.disabled ? "btn btn-default disabled" : "btn btn-default"} type="submit">Submit</button>
                    </div>

                    <div className="col-md-10">
                      <div className= { this.state.loading ? "alert alert-info" : "alert alert-info hidden"}>
                        <i className="fa fa-circle-o-notch fa-spin"></i> Sending feedback email.</div>


                    <div className= { this.state.success ? "alert alert-success" : "alert alert-success hidden"}>
                      <strong>Success!</strong> We have received your feedback and will get back to you shortly.
                    </div>

                   <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
                      <strong>Error!</strong> Unfortunatly there has been an error, try refreshing the page and submitting again.
                                              If the problem still persists you can directly send your feedback
                                               to <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
                    </div>
                  </div>

                  </form>



                </div>
                <div className="col-md-5 col-sm-6">

                  <div className="contact">

                    <h3>General enquiries (8am-5pm AEST, Mon-Fri)</h3>

                    <h4>
                      <span className="head">Telephone: </span>133 254</h4>
                    <h4>
                      <span className="head">Regional callers: </span>1800 555 254</h4>
                    <h4>
                      <span className="head">International callers: </span>61 2 6289 1133</h4>


                    <h3>Email</h3>
                    <h4>
                      veteransemployment@dva.gov.au</h4>
                  </div>

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

  if (!values.Name) {
    errors.Name = "Please enter your name.";
  }

  if (!values.Email && !values.Phone) {
    errors.Email = 'Please provide an email address or phone number.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email) && !values.Phone) {
    errors.Email = 'Invalid email address.'
  }

  if (!values.Phone && !values.Email) {
    errors.Phone = "Please provide a phone number or an email address.";
  }

  if (!values.Message) {
    errors.Message = "Please enter a message.";
  }

  return errors;

}

export default reduxForm({
  validate, form: 'feedbackForm' // a unique identifier for this form
})(Contact)
