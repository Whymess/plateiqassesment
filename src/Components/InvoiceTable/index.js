import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    marginTop: "0px",
    overflowX: "auto",
    fontWeight: "bolder",
    width: "auto",
    backgroundColor: "#f8f9fa"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, Qty, UnitPrice, Total) {
  id += 1;
  return { id, name, Qty, UnitPrice, Total };
}

const rows = [
  createData("Chocolate Syrup", 1, 2, 4, 4.0),
  createData("Frosting", 1, 6.0, 24, 4.0),
  createData("Brownie", 159, 6.0, 24, 4.0),
  createData("Trifle", 159, 6.0, 24, 4.0),
  createData("Peter Griffin", 159, 6.0, 24, 4.0),
  createData("James Woods", 159, 6.0, 24, 4.0),
  createData("Meg Griffin", 159, 6.0, 24, 4.0),
  createData("Carter Pewterschmidt", 159, 6.0, 24, 4.0),
  createData("Cleveland Brown", 159, 6.0, 24, 4.0),
  createData("Chris Griffin", 159, 6.0, 24, 4.0)
];

function InvoiceTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.root}>Name</TableCell>
            <TableCell className={classes.root} numeric>
              Qty
            </TableCell>
            <TableCell className={classes.root} numeric>
              Unit Price
            </TableCell>
            <TableCell className={classes.root} numeric>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.Qty}</TableCell>
                <TableCell numeric>{row.UnitPrice}</TableCell>
                <TableCell numeric>{row.Total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

InvoiceTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceTable);
