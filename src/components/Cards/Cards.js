import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    width: "70%",
    flexWrap: "wrap",
    marginTop: "20px",
    marginBottom: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  const classes = useStyles();
  if (!confirmed) {
    return "loading";
  }
  console.log(globalData)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <CardContent>
            <Paper
              className={classes.paper}
              style={{ borderBottom: "10px solid blue" }}
            >
              {" "}
              <Typography gutterBottom variant="h5" component="h2">
                Infected
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </Paper>
          </CardContent>
        </Grid>
        <Grid item sm={4}>
          <CardContent>
            <Paper
              className={classes.paper}
              style={{ borderBottom: "10px solid green" }}
            >
              {" "}
              <Typography gutterBottom variant="h5" component="h2">
                Recovered
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </Paper>
          </CardContent>
        </Grid>
        <Grid item sm={4}>
          <CardContent>
            <Paper
              className={classes.paper}
              style={{ borderBottom: "10px solid red" }}
            >
              {" "}
              <Typography gutterBottom variant="h5" component="h2">
                Deaths
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </Paper>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
