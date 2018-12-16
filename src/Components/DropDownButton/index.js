import React, { Component } from "react";
import "./DropDownButton.css";
export default class DropDownButton extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn  btn-secondary-custom dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title}
        </button>
        <div className="dropdown-menu">
          <div className="dropdown-item">Export</div>
          <div href="" className="dropdown-item">
            Mark as exported
          </div>
          <div className="dropdown-divider" />
          <div className="dropdown-item">Setup Vendor</div>
          <div className="dropdown-divider" />
          <div className="dropdown-item">
            Flag Invoice
            <i style={{ marginLeft: "1em" }} className="fa fa-flag" />
          </div>
          <div className="dropdown-item">
            Active Invoice
            <i style={{ marginLeft: "1em" }} className="fa fa-envelope-o" />
          </div>

          <div style={{ color: "red" }} className="dropdown-item">
            Delete invoice
            <i style={{ marginLeft: "1em" }} className="fa fa-trash-o" />
          </div>
        </div>
      </div>
    );
  }
}
