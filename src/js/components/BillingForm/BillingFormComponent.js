import React from "react"
import { connect } from "react-redux"

import Input from "../Input/InputComponent"
import { updateFormValue, submitForm } from "./BillingFormActions"


@connect((store) => {
  return {
    form: store.billingForm
  };
})
export default class BillingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    console.log(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const update = {};
    update[event.target.id] = event.target.value;
    this.setState(update);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitForm(this.props.form));
  }

  render() {
    const { firstName, lastName, email } = this.props.form;

    return <div>
      <h1>Billing Information</h1>
      <div class="row">
        <form onSubmit={this.handleSubmit}>
        
          <div class="col-xs-12 col-md-6">
            <Input field={ firstName } action={ updateFormValue }/>
          </div>
          
          <div class="col-xs-12 col-md-6">
            <Input field={ lastName } action={ updateFormValue }/>
          </div>

          <div class="col-xs-12">
            <Input field={ email } action={ updateFormValue }/>
          </div>
        
          <button type="submit" class="btn btn-default">Submit</button>
        
        </form>
      </div>
    </div>
  }
}
