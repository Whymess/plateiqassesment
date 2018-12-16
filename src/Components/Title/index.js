import React from "react";
import "./Title.css";

export default props => {
  let { title, expandMore } = props;
  return (
    <div style={{ padding: "0px" }} className="container">
      <div className="title-customer-table">vendor</div>
      <div className="title">{title}</div>
      {expandMore ? null : (
        <div style={{ color: "green" }}>
          <i className="fa fa-check-square-o" /> This vendor is mapped
        </div>
      )}
    </div>
  );
};
