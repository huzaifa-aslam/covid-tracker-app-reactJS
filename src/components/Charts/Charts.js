import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FetchdailyData } from "../../Api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "50%",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Charts({ chGlobalData: { confirmed, recovered, deaths }, country }) {
  const classes = useStyles();

  const [newDailyData, setNewDailyData] = useState([]);

  const LineChart = newDailyData[0] ? (
    <Line
      data={{
        labels: newDailyData.map(({ date }) => date),
        datasets: [
          {
            data: newDailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: newDailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  useEffect(() => {
    const FetchApi = async () => {
      const dailyData = await FetchdailyData();
      setNewDailyData(dailyData);
      //console.log("dailyData",dailyData)
    };
    //console.log(newDailyData);
    FetchApi();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h2>Line Example</h2>

          {country ? BarChart : LineChart}
        </Grid>
      </Grid>
    </div>
  );
}
export default Charts;
