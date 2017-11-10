import React from "react"
import { connect } from "react-redux"
import './Input.css';

@connect((store) => {
    return {};
})
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (this.props.action != undefined) {
            const id = this.props.field.id;
            const value = event.target.value;
            this.props.dispatch(this.props.action(id, value));
        }
    }

    render() {
        const { id, title, type, required, placeholder, value } = this.props.field;

        return <div class="form-group">
            <label for={id}>{title} <span class="required-field" hidden={!required}>*</span></label>
            <input type={ type } class="form-control" id={id}
                placeholder={placeholder} value={value} onChange={this.handleChange} />
        </div>
    }
}