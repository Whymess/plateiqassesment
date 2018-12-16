import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./HistoryTable.css";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    top: "4em",
    position: 'relative',
    overflowX: "auto"

  },
  table: {
    minWidth: 700
  }
});

function HistoryTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <div className={classes.table}>
        <div className="d-flex flex-row history-row">
          <div className="p-2 bd-highlight">
            <div className="item-container">
              <div className="Day-history"> Today </div>
              <div className="time-history"> 09:25AM </div>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex" style={{ marginLeft: "3em" }}>
              <div className="red-dot" />
              <div className="flagged-by-history">Flagged by John Doe</div>
            </div>
            <div className="d-flex" style={{ marginLeft: "3em" }}>
              <div className="details-about-flag">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

HistoryTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HistoryTable);
