import React, { Component } from "react";
import placeholderImage from '../../Assets/Images/Sample-Invoice-Template-image.png'

import classNames from "classnames";
import {
  DropDownButton,
  Title,
  ExpandButton,
  SubInfoThridRow,
  TableRowButtons,
  InvoiceTable,
  HistoryTable,
  ApproveButton,
  CustomerDataTable
} from "../../Components/";
import "./Application.css";

export default class Application extends Component {
  state = {
    showHisory: false,
    showLineItems: true,
    showCustomerDetails: false,
    expandMore: true
  };

  showHistoryOnChange = () => {
    this.setState({
      showHisory: true,
      showLineItems: false
    });
  };

  showLineItemsOnChange = () => {
    this.setState({
      showHisory: false,
      showLineItems: true
    });
  };

  customerDetailsOnChange = () => {
    this.setState(prevState => ({
      showCustomerDetails: !prevState.showCustomerDetails,
      expandMore: !prevState.expandMore
    }));
  };

  render() {
    let { showHisory, showLineItems, expandMore } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col image-section">

              <img alt="" className="invoice-image" src={placeholderImage}/>

            </div>
            <div className="col invoice-main">
              <div className="d-flex bd-highlight mb-3">
                <div className="mr-auto p-2 bd-highlight">
                  <button type="button" className="btn-primary-custom">
                    Direct
                  </button>
                </div>
                <div className="p-2 bd-highlight">
                  <DropDownButton title="More" />
                </div>
                <div className="p-2 bd-highlight">
                  <ApproveButton
                    customerDetailsOnChange={this.customerDetailsOnChange}
                  />
                </div>
              </div>
              <div className="d-flex bd-highlight mb-3 secondRow">
                <div className="p-2 bd-highlight">
                  <Title expandMore={expandMore} title="Freguesia Cheese" />
                </div>
                <div className="p-2 bd-highlight">
                  <ExpandButton
                    customerDetailsOnChange={this.customerDetailsOnChange}
                    expandMore={expandMore}
                  />
                </div>
              </div>
              {expandMore ? (
                <SubInfoThridRow
                  sectionOne="00002526"
                  sectionTwo="Jul 09 2017"
                  sectionThree="Morty's Cheese Shop"
                  sectionFour="Lorem ipsum dolor.."
                />
              ) : (
                <CustomerDataTable />
              )}

              <TableRowButtons
                showLineItemsOnChange={this.showLineItemsOnChange}
                showLineItemsState={showLineItems}
                historyLineState={showHisory}
                showHistoryOnChange={this.showHistoryOnChange}
                total={expandMore ? "Total: $10,000" : ""}
              />
              <div
                className={classNames({
                  "container-for-history-table": showHisory
                })}
              >
                {showHisory ? (
                  <div className="title-for-activity"> Recent Activity </div>
                ) : (
                  ""
                )}

                {showHisory ? <HistoryTable /> : ""}
              </div>

              {showLineItems ? <InvoiceTable /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
