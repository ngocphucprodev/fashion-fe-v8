import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    // nav("/login");
    // window.location.reload();
  };

  return (
    <List
      sx={{
        width: "100%",
        ...(mobileOpen ? { maxWidth: "200px" } : { maxWidth: "55px" }),
        height: "1000px",
        backgroundColor: "rgb(21, 61, 119)",
        color: "#fff",
        top: "-10px",
        left: "-10px",
        position: "fixed",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{
            backgroundColor: "rgb(21, 61, 119)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 20px",
          }}
          component="div"
          id="nested-list-subheader"
        >
          <HomeIcon
            sx={{
              color: "#fff",
              ...(mobileOpen ? { display: "block" } : { display: "none" }),
            }}
          />{" "}
          {mobileOpen ? "ADMIN" : ""}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ...(mobileOpen
                ? { transform: "rotate(0)" }
                : { transform: "rotate(180deg)" }),
            }}
          >
            {/* <ArrowBackIcon /> */}
          </IconButton>
        </ListSubheader>
      }
    >
      <Box>
        <Divider sx={{ backgroundColor: "#fff", marginTop: "26px" }} />
        <Box sx={{ textAlign: "center", margin: "30px auto" }}>
          <Tooltip title={userLogin.username} placement="bottom">
            <Avatar
              alt="Remy Sharp"
              onClick={() => setOpen(!open)}
              sx={{ width: "70px", height: "70px", margin: "10px auto" }}
              src={require(`../../../public/images/${userLogin.image}`)}
            />
          </Tooltip>
          <Typography variant="body2">I'm {userLogin.username}</Typography>
        </Box>

        <Paper
          sx={{
            width: "150px",
            // marginLeft: "auto",
            position: "absolute",
            bottom: "-120px",
            right: 0,
            ...(open ? { display: "block" } : { display: "none" }),
          }}
        >
          <MenuList>
            <MenuItem>Thông tin của bạn</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </MenuList>
        </Paper>
      </Box>
      <Box sx={{ marginTop: "15px" }}>
        <Link>
          <ListItemButton>
            <ListItemIcon>
              <PaidIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fff",
                ...(mobileOpen ? { display: "block" } : { display: "none" }),
              }}
              primary="Doanh thu"
            />
          </ListItemButton>
        </Link>

        <Divider />
        <Link to="/users">
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fff",
                ...(mobileOpen ? { display: "block" } : { display: "none" }),
              }}
              primary="Khách hàng"
            />
          </ListItemButton>
        </Link>

        <Divider />
        <Link to="products">
          <ListItemButton
          // onClick={() => {
          //   setOpen(!open);
          // }}
          >
            <ListItemIcon>
              <StoreIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fff",
                ...(mobileOpen ? { display: "block" } : { display: "none" }),
              }}
              primary="Sản phẩm"
            />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
        </Link>
        <Divider />
        <Link to="orders">
          <ListItemButton
          // onClick={() => {
          //   setOpen(!open);
          // }}
          >
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fff",
                ...(mobileOpen ? { display: "block" } : { display: "none" }),
              }}
              primary="Đơn hàng"
            />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
        </Link>

        <Divider />
        <Link to="products">
          <ListItemButton
          // onClick={() => {
          //   setOpen(!open);
          // }}
          >
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "#fff",
                ...(mobileOpen ? { display: "block" } : { display: "none" }),
              }}
              primary="Cài đặt"
            />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
        </Link>
      </Box>
    </List>
  );
};

export default Sidebar;
