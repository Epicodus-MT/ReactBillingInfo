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
        			<div class="pricealign">

        				<img alt="chococurb subscription" id="giftBox" alt="your order" src="https://cdn.shopify.com/s/files/1/0473/9005/t/11/assets/Chococurb_Subscribe_Dropdown.png"/>
        				<h2>Chococurb Mini 1 Month Gift Box</h2>
        				<h2>$20.00</h2><br />
        			</div>
        			<hr />
        			<form>
        				<div class="form-inline">
        	  			<div class="form-group">
        	    			<input type="promo_code" class="form-control" id="promoCode" placeholder="Promo Code" />
        	  			</div>
        	  			<button type="submit" class="button">  APPLY  </button>
        				</div>
        			</form>
        			<hr />
        			<div class="pricealign">
        				<h2>Subtotal</h2>
        				<h2>$20.00</h2><br />
        			</div>
        			<div class="pricealign">
        				<h2>Shipping</h2>
        				<h2>$0.00</h2><br />
        			</div>
        			<hr />
        			<div class="pricealign">
        				<h2>Total</h2>
        				<h2>USD $20.00</h2><br />
        			</div>
        		</div>
          </div>
        </div>
    }
}
