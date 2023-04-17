import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { AuthContext, ContextCart } from "../context/ContextApiProducts";

const Nav = () => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const { carts } = useContext(ContextCart);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    nav("/login");
    window.location.reload();
  };
  return (
    <Box
      sx={{
        background: "rgb(255,255,255)",
        background:
          "radial-gradient(top, rgba(255,255,255,1), bottom,rgba(205,225,245,1) )",
      }}
    >
      <Container>
        <Grid container sx={{ padding: 1, alignItems: "center" }}>
          <Grid item md={2} xs={4} sm={3}>
            <Box>
              <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
                <CardMedia
                  component="img"
                  image={
                    "https://cdn.shopify.com/s/files/1/1737/7579/t/65/assets/forbes-logo.jpg?v=1661270927"
                  }
                  alt="green iguana"
                  style={{
                    width: "120px",
                    height: "50px",
                    marginLeft: "-35px",
                  }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Search />
          </Grid>
          <Grid item md={4} xs={2} sm={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <MenuList sx={{ display: "flex" }}>
                <MenuItem>
                  <Typography variant="body2" color="#7A7A9D">
                    THƯƠNG HIỆU
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="body2"
                      color="#7A7A9D"
                      sx={{ display: "inline" }}
                    >
                      GIỎ HÀNG
                    </Typography>
                    <Badge badgeContent={carts.length ?? "0"} color="primary">
                      <LocalMallIcon
                        sx={{
                          color: "#1975D2",
                          fontSize: "20px",
                          marginLeft: "5px",
                          marginTop: "-5px",
                        }}
                      />
                    </Badge>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link
                    to="/login"
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <Typography variant="body2" color="#7A7A9D">
                      ĐĂNG KÝ
                    </Typography>
                    <Typography variant="body2" color="#7A7A9D">
                      /
                    </Typography>
                    <Typography variant="body2" color="#7A7A9D">
                      ĐĂNG NHẬP
                    </Typography>
                  </Link>
                </MenuItem>
              </MenuList>

              <MenuItem
                sx={{
                  position: "relative",
                  marginRight: { xs: "-35px", md: "unset" },
                }}
              >
                {userLogin ? (
                  <Tooltip title={userLogin.username} placement="bottom">
                    <Avatar
                      alt="Remy Sharp"
                      onClick={() => setOpen(!open)}
                      src={require(`../../public/images/${userLogin.image}`)}
                    />
                  </Tooltip>
                ) : (
                  ""
                )}
                <Paper
                  sx={{
                    width: "150px",
                    position: "absolute",
                    bottom: "-120px",
                    right: 0,
                    ...(open ? { display: "block" } : { display: "none" }),
                  }}
                >
                  <MenuList>
                    <MenuItem>Tài khoản của bạn</MenuItem>
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                  </MenuList>
                </Paper>
              </MenuItem>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
