import React from "react";
import useStyles from "./style";
import Fade from "react-reveal/Fade";
import { Paper } from "@mui/material";
const Hero = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div>
          <div className={classes.headerElement}>
            <Fade left>
              <Paper variant="outlined">
                <img
                  className={classes.imageHeader}
                  alt="Derick Zihalirwa"
                  src="images/2.jpg"
                />
              </Paper>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
