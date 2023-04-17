import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import PaidIcon from "@mui/icons-material/Paid";
import { ContextCart, ContextProduct } from "../../context/ContextApiProducts";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { users, products, orders } = useContext(ContextProduct);
  const [open, setOpen] = useState(false);
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = () => {
    nav("/");
    window.location.reload();
  };

  const total = orders.data.reduce((total, item) => {
    return total + Number(item.totalpayment);
  }, 0);

  //console.log(total);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <AppBar
            component="nav"
            sx={{
              width: "1750px",
              display: "flex",
              backgroundColor: "rgb(21, 61, 119)",
              height: "280px",
            }}
          >
            <Toolbar sx={{ borderBottom: "1px solid #FFF" }}>
              <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Tooltip
                title="Website"
                placement="bottom"
                onClick={() => handleLogout()}
              >
                <Link to="/">
                  <HomeIcon sx={{ color: "#fff" }} />{" "}
                </Link>
              </Tooltip>
            </Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                position: "relative",
                zIndex: "9999",
                marginTop: "20px",
              }}
            >
              <Card sx={{ maxWidth: 300, height: "160px" }}>
                <CardHeader
                  subheader="6.000 khách hàng"
                  action={<GroupIcon sx={{ color: "#1976d2" }} />}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Hệ thống có hơn 6.000 khách hàng trên toàn quốc, cùng với
                    các cơ sở kinh doanh trên toàn quốc
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 300, height: "160px" }}>
                <CardHeader
                  subheader="Hơn 1000 sản phẩm"
                  action={<StoreIcon sx={{ color: "#1976d2" }} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Với hơn 1.000 sản phẩm khác nhau tuỳ theo lứa tuổi, chúng
                    tôi cam đoàn mang lại thời trang xanh, sạch, đẹp
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 300, height: "160px" }}>
                <CardHeader
                  subheader="1000 đơn hàng"
                  action={<LocalMallIcon sx={{ color: "#1976d2" }} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Hệ thống logistics giúp sản phẩm đến tay khách hàng một cách
                    nhanh nhất, gồm nhiêu kho bãi lớn ở các thành phố
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 300, height: "160px" }}>
                <CardHeader
                  subheader={total.toLocaleString() + " VND"}
                  action={<PaidIcon sx={{ color: "#1976d2" }} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Mang lại nguồn danh thu, tiếp túc đầu tư xây dựng hệ thống
                    nhằm đáp ứng nhu cầu thiết yếu của khách hàng
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </AppBar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Menu;
