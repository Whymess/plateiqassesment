import React, { Component } from "react";
import "./ExpandButton.css";
import downArrow from "../../Assets/Images/baseline-expand_more-24px.svg";
import upArrow from "../../Assets/Images/baseline-expand_less-24px.svg";

export default class ExpandButton extends Component {
  render() {
    let { expandMore, customerDetailsOnChange } = this.props;

    return (
      <button onClick={customerDetailsOnChange} className="expand-more-btn">
        {expandMore ? (
          <img alt="" src={downArrow} />
        ) : (
          <img alt="" src={upArrow} />
        )}
      </button>
    );
  }
}
