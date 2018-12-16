import React, { Component } from "react";
import classNames from "classnames";
import "./TableRowButtons.css";

export default class TableRowButtons extends Component {
  render() {
    let {
      total,
      showHistoryOnChange,
      historyLineState,
      showLineItemsOnChange,
      showLineItemsState
    } = this.props;
    return (
      <div className="d-flex bd-highlight">
        <div
          onClick={() => showLineItemsOnChange()}
          className={classNames(
            { "p-2 bd-highlight": true },
            { "Line-Items-btn": showLineItemsState }
          )}
        >
          Line Items
        </div>
        <div
          onClick={() => showHistoryOnChange()}
          className={classNames(
            { "p-2 bd-highlight": true },
            { "active-history-btn": historyLineState }
          )}
        >
          History
        </div>
        <div className="ml-auto total-tableRowButton p-2 bd-highlight">
          {total ? <div className="total"> Total {total}</div> : ""}
        </div>
      </div>
    );
  }
}
