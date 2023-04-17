import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProduct } from "../context/ContextApiProducts";
import reducer from "../context/reducer";

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    padding: "5px 10px",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};

const ViewCart = () => {
  // const classes = useStyles();
  const [type, setType] = useState("");
  const { products, galleries } = useContext(ContextProduct);
  const [filterState, dispatch] = useReducer(reducer.filterReducer, products);
  //console.log(filterState);
  let filterProducts = "";
  filterState.data
    ? (filterProducts = filterState.data)
    : (filterProducts = filterState);
  //console.log(filterProducts);
  const handleFilter = (dataType) => {
    dispatch({
      type: dataType,
      payload: dataType,
      products,
    });
    setType(dataType);
  };
  return (
    <Grid container>
      <Grid item xs={3} sx={{ position: "fixed" }}>
        <Box>
          <FormLabel id="demo-radio-buttons-group-label">
            Loại sản phẩm
          </FormLabel>
          <Box
            sx={{
              "&::-webkit-scrollbar": {
                width: "7px",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 5px #DDE1EF",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#7A7A9D",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "black",
              },

              width: "250px",
              height: "250px",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={
                type == "Áo Sơmi Nam"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo Sơmi Nam")
              }
              variant="contained"
            >
              Áo sơmi nam
            </Button>
            <Button
              sx={
                type == "Áo Sơmi Nữ"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo Sơmi Nữ")
              }
              variant="contained"
            >
              Áo Sơmi Nữ
            </Button>
            <Button
              sx={
                type == "Áo sơmi trẻ em"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              variant="contained"
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo sơmi trẻ em")
              }
            >
              Áo sơmi trẻ em
            </Button>
            <Button
              sx={
                type == "Áo polo thể thể thao"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo polo thể thể thao")
              }
              variant="contained"
            >
              Áo polo thể thể thao
            </Button>
            <Button
              sx={
                type == "Áo polo trẻ em"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo polo trẻ em")
              }
              variant="contained"
            >
              Áo polo trẻ em{" "}
            </Button>
            <Button
              sx={
                type == "Áo Polo Nữ"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Áo Polo Nữ")
              }
              variant="contained"
            >
              Áo Polo Nữ
            </Button>
            <Button
              sx={
                type == "Áo Polo Nam"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })Á
                handleFilter("Áo Polo Nam")
              }
              variant="contained"
            >
              Áo Polo Nam
            </Button>
            <Button
              sx={
                type == "Quần Kaki nữ"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px solid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              onClick={() => handleFilter("Quần Kaki nữ")}
              variant="contained"
            >
              Quần kaki Nữ
            </Button>
            <Button
              sx={
                type == "Quần Jean nam"
                  ? {
                      color: "#1976d2",
                      backgroundColor: "unset",
                      border: "1px solid #1976d2",
                      boxShadow: "unset",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      ":after": {
                        content: `""`,
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "20px solid transparent",
                        borderRight: "20px solid red",
                        top: "-1px",
                        right: "-1px",
                        transform: "initial",
                        transform: "rotate(-90deg)",
                      },
                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
                  : {
                      border: "1px so   lid #F2F2F2",
                      textTransform: "capitalize",
                      backgroundColor: "#F2F2F2",
                      boxShadow: "unset",
                      color: "#7A7A9D",
                      marginTop: "10px",

                      ":hover": {
                        color: "#1976d2",
                        backgroundColor: "unset",
                        border: "1px solid #1976d2",
                        boxShadow: "unset",
                      },
                    }
              }
              variant="contained"
              onClick={() =>
                // dispatch({
                //   type: "SOMINAM",
                //   payload: "Áo Sơmi Nam",
                //   products,
                // })
                handleFilter("Quần Jean nam")
              }
            >
              Quần Jean nam
            </Button>
          </Box>
          <FormControl sx={{ marginTop: "30px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Bảng giá</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ marginTop: "5px" }}
            >
              <FormControlLabel
                value="300.000"
                control={<Radio />}
                label="Dưới 300.000đ"
                sx={{ ...formControlLabelStyle }}
                onClick={() =>
                  // dispatch({
                  //   type: "SOMINAM",
                  //   payload: "Áo Sơmi Nam",
                  //   products,
                  // })
                  handleFilter("Filter300")
                }
              />
              <FormControlLabel
                value="fds"
                control={<Radio />}
                label="300.000đ - 450.000đ"
                sx={{ ...formControlLabelStyle }}
                onClick={() => handleFilter("Filter300450")}
              />

              <FormControlLabel
                value="othe1r"
                control={<Radio />}
                label="500.000đ - 700.000đ"
                sx={{ ...formControlLabelStyle }}
                onClick={() => handleFilter("Filter500700")}
              />

              <FormControlLabel
                value="700.000"
                control={<Radio />}
                label="Trên 700.000đ"
                sx={{ ...formControlLabelStyle }}
                // onClick={() =>
                //   dispatch({
                //     type: "FILTER-700.000",
                //     payload: "700.000",
                //   })
                // }
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {!filterProducts ? (
          <Typography sx={{ mt: 1, mb: 2, fontWeight: "bold" }} variant="body2">
            Không có sản phẩm nào trong danh mục này, chúng tôi sẽ sớm cập nhập!
          </Typography>
        ) : (
          filterProducts.map((product, index) => (
            <Grid item xs={4} sx={{ marginBottom: "20px" }} key={index}>
              <Card sx={{ boxShadow: "unset" }}>
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardMedia
                    component="img"
                    image={require(`../../public/images/${
                      product.image ? product.image : "err.png"
                    }`)}
                    alt="green iguana"
                    sx={{
                      maxHeight: "300px",
                      maxWidth: "250px",
                    }}
                  />
                </Link>
                <CardMedia
                  component="img"
                  image={
                    "https://bizweb.dktcdn.net/100/438/408/themes/902401/assets/hotico.svg?1680339560320"
                  }
                  sx={{
                    position: "relative",
                    top: "-250px",
                    right: "-200px",
                    width: "35px",
                    height: "35px",
                    display: "block",
                    zIndex: 9,
                    backgroundSize: "35px",
                  }}
                ></CardMedia>
                {/* {console.log(gall[index]._id.$oid, product.gallery)} */}
                <CardMedia
                  component="img"
                  image={
                    "https://bizweb.dktcdn.net/100/438/408/themes/900748/assets/sticky-850k.png?1679739261748"
                  }
                  sx={{
                    height: "100px",
                    width: "100px",
                    marginTop: "-150px",
                  }}
                />

                <CardContent sx={{ paddingLeft: 0 }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{
                      minHeight: "50px",
                      maxWidth: "240px",
                      marginTop: "5px",
                      ":hover": {
                        color: "#1976d2",
                      },
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold" }}
                    color="text"
                  >
                    {product.price} Đ
                    {/* {console.log(product.gallery, gall[index]._id.$oid)} */}
                  </Typography>
                  {/* {console.log(galleries.data[index]._id, product.gallery)} */}

                  {galleries.data[index]._id == product.gallery ? (
                    <Stack
                      direction="row"
                      sx={{ marginTop: "10px" }}
                      spacing={2}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={require(`../../public/images/${galleries.data[index].image1}`)}
                      />
                      <Avatar
                        alt="Travis Howard"
                        src={require(`../../public/images/${galleries.data[index].image2}`)}
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src={require(`../../public/images/${galleries.data[index].image3}`)}
                      />
                    </Stack>
                  ) : (
                    ""
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default ViewCart;
