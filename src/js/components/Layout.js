import React from "react"
import { connect } from "react-redux"

import BillingForm from "./BillingForm/BillingFormComponent"


@connect((store) => {
  return {};
})
export default class Layout extends React.Component {

  render() {
      return <div class="container">
          <div class="col-xs-12 col-md-9">
            <BillingForm />
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="well">
              hi
            </div>
          </div>
        </div>
    }

}
