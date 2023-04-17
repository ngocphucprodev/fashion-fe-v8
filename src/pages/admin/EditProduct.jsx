import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    price: "",
    total: "",
    image: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value ? e.target.value : e.target.files,
    });
  };

  const handleSubmit = (e) => {
    const strImage = form.image;
    const image = strImage.split("\\")[2];
    e.preventDefault();
    fetch(
      `http://fashion-v6.onrender.com/product/edit/${
        location.pathname.split("/")[3]
      }`,
      {
        method: "PUT",
        body: JSON.stringify({ ...form, image }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(form);
  };

  const [product, setproduct] = useState("");
  console.log(product);
  useEffect(() => {
    fetch(
      `http://localhost:4000/product/detail/${location.pathname.split("/")[3]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setproduct(data);
      });
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        md={6}
      >
        {" "}
        <Box>
          <Typography
            sx={{ mt: 4, mb: 2, textAlign: "center" }}
            variant="h5"
            component="div"
          >
            CHỈNH SỬA SẢN PHẨM
          </Typography>
          <TextField
            fullWidth
            helperText="Nhập tên sản phẩm"
            name="name"
            label={product.name}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            helperText="Nhập giá sản phẩm"
            name="price"
            onChange={handleInput}
            label={product.price}
          />
          <TextField
            fullWidth
            helperText="Nhập số lượng sản phẩm"
            name="total"
            label={product.total}
            onChange={handleInput}
          />

          <TextField
            fullWidth
            helperText="Nhập loại sản phẩm"
            name="total"
            label={product.type}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            name="Nhập hình ảnh sản phẩm"
            onChange={handleInput}
            label={product.image}
          />

          <Button
            fullWidth
            variant="outlined"
            onClick={handleSubmit}
            sx={{ mt: 3 }}
            type="submit"
          >
            CẬP NHẬT SẢN PHẨM
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={require(`../../../public/images/${
            product.image ? product.image : "err.png"
          }`)}
          alt="green iguana"
          style={{ width: "700px", height: "900px", textAlign: "center" }}
        />
      </Grid>
    </Grid>
  );
};

export default EditProduct;
