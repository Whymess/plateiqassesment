import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./CustomerDataTable.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    boxShadow: "none",
    borderTop: "1px solid lightgrey",

    padding: "0px"
  },
  table: {
    minWidth: 700
  },
  row: {
    padding: "0px"
  }
});

function CustomerDataTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">invoice no.</div>
                <div className="data-customer-table">00000123</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">invoice type</div>
                <div className="data-customer-table">Receipt</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">restaurant</div>
                <div className="data-customer-table">Monty's Cheese Shop</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">SubTotal</div>
                <div className="title-customer-table">tax</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div
                  style={{ fontSize: "12px" }}
                  className="title-customer-table"
                >
                  $1300.00
                </div>
                <div
                  style={{ fontSize: "12px" }}
                  className="title-customer-table"
                >
                  $26.32
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">posting date</div>
                <div className="data-customer-table">July 14, 2017</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">invoice date</div>
                <div className="data-customer-table">July 09, 2017</div>
              </div>
            </TableCell>
            <TableCell className={classes.row} component="th" scope="row">
              <div className="container-for-customer-table">
                <div className="title-customer-table">due date</div>
                <div className="data-customer-table">Sep 14, 2017</div>
              </div>
            </TableCell>
            <TableCell
              style={{ border: "none" }}
              className={classes.row}
              component="th"
              scope="row"
            >
              <div className="container-for-customer-table">
                <div className="title-customer-table">Total</div>
              </div>
            </TableCell>
            <TableCell
              style={{ border: "none" }}
              className={classes.row}
              component="th"
              scope="row"
            >
              <div className="container-for-customer-table">
                <div className="total-customer-table">$10,000.00</div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div style={{ color: "lightgrey" }} className="container">
        <i style={{ padding: "4px" }} className="fa fa-comment" />
        Click to enter Memo
      </div>
    </Paper>
  );
}

CustomerDataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerDataTable);
