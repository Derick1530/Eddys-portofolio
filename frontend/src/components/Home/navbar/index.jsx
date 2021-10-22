import React from "react";
import useStyles from "./style";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CssBaseline />
      <div className={classes.logo}>PortFolio</div>

      <Fade bottom>
        <div className={classes.navlink}>
          <Link className={classes.elemLink} to="/">
            Home
          </Link>
          <Link className={classes.elemLink} to="/">
            Home
          </Link>
          <Link className={classes.elemLink} to="/">
            Home
          </Link>
          <Link className={classes.elemLink} to="/">
            Home
          </Link>
        </div>
      </Fade>
      <Button
        variant="outlined"
        className={classes.hireme}
        size="small"
        sx={{ color: "green" }}
      >
        Hire me
      </Button>
    </div>
  );
};

export default Navbar;
