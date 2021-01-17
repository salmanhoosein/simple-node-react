/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, makeStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  buttonStyle: {
    fontSize: 18,
  },
}));

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid
      container
      style={{
        backgroundColor: "#222",
      }}
      justify="space-between"
    >
      <Grid
        item
        style={{
          margin: 10,
        }}
      >
        <Link
          component={RouterLink}
          to="/app/upload-your-data"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Upload your data
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/app/test-our-data"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Test our data
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/app/test-our-data"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Optimization
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default NavBar;
