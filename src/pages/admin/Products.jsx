import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  CardMedia,
  IconButton,
  InputBase,
  List,
  ListItem,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { ContextProduct } from "../../context/ContextApiProducts";
import styled from "@emotion/styled";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(221 221 221)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Products = () => {
  const { users, products } = useContext(ContextProduct);

  const handleRemove = (id) => {
    fetch(`https://fashion-v6.onrender.com/product/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/addproduct"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Button variant="outlined">THÊM MỚI</Button>
        </Link>
      </Box>
      <table
        style={{
          maxWidth: "auto",
          margin: "200px auto",
          transform: "translateX(95px)",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Ảnh{" "}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Tên sản phẩm
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Số lượng
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Đơn giá&nbsp;(VND)
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Mổ tả&nbsp;(g)
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Ngày tạo
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontWeight: "bold",
              }}
              align="center"
            >
              Thao tác
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.data.map((product, index) => {
            return (
              <StyledTableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <CardMedia
                    component="img"
                    image={require(`../../../public/images/${
                      product.image ? product.image : "err.png"
                    }`)}
                    alt="green iguana"
                    style={{ width: "100px", height: "100px" }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell sx={{ width: "100px", textAlign: "center" }}>
                  {product.total}
                </TableCell>
                <TableCell sx={{ width: "100px", textAlign: "center" }}>
                  {product.price} Đ
                </TableCell>
                <TableCell>
                  <List sx={{ overflow: "auto", maxHeight: "100px" }}>
                    {product.description.split("/").map((list) => (
                      <ListItem>- {list}</ListItem>
                    ))}{" "}
                  </List>
                </TableCell>
                <TableCell>{product.createdAt} Đ</TableCell>
                <TableCell sx={{ width: "100px", textAlign: "center" }}>
                  <DeleteIcon
                    onClick={() => handleRemove(product._id)}
                    sx={{ color: "#1976d2" }}
                  />
                </TableCell>
                <TableCell>
                  <Link to={`/products/edit/${product._id}`}>
                    <EditOutlinedIcon
                      onClick={() => console.log(product._id)}
                      sx={{ color: "#1976d2" }}
                    />
                  </Link>
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </table>
    </React.Fragment>
  );
};

export default Products;
