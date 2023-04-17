import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Menu from "./Menu";
import RoutesDasboard from "./Routes";
import Sidebar from "./Sidebar";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import PaidIcon from "@mui/icons-material/Paid";
import { ContextProduct } from "../../context/ContextApiProducts";
const Dashboard = () => {
  const { users, products } = useContext(ContextProduct);
  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          md={2}
          sx={{
            position: "absolute",
            zIndex: "9999",
            display: { md: "block" },
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item md={10} sx={{ pt: 10, margin: "0px auto" }}>
          <Menu />

          <RoutesDasboard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
