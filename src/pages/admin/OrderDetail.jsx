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
  Typography,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { ContextProduct } from "../../context/ContextApiProducts";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(221 221 221)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const OrderDetail = () => {
  const location = useLocation();
  // const { getProduct } = useContext(ContextProduct);
  const [orderDetail, setOrderDetail] = useState("");
  const [product, setProduct] = useState({});
  const orderId = location.pathname.split("/");

  // const productdetail = (getProduct) => {
  //   console.log(getProduct);
  // };

  useEffect(() => {
    fetch(
      `https://fashion-v6.onrender.com/orderdetail/${
        orderId[orderId.length - 1]
      }`
    )
      .then((response) => response.json())
      .then((data) => setOrderDetail(data));
  }, []);

  return (
    <React.Fragment>
      <div>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>
        <table style={{ maxWidth: "auto", margin: "220px auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Số lượng{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Đơn giá
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Mã sản phẩm
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Mã đơn hàng
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Tổng tiền&nbsp;(VND)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetail &&
              orderDetail.map((item, index) => {
                return (
                  <StyledTableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      component="th"
                      scope="row"
                    >
                      {/* <CardMedia
                        component="img"
                        image={require(`../../../public/images/${item.image}`)}
                        alt="green iguana"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      /> */}
                      {item.number}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "100px",
                      }}
                    >
                      {item.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "400px",
                      }}
                    >
                      {item.product}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "150px",
                      }}
                    >
                      {item.order}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        width: "150px",
                      }}
                    >
                      {eval(item.number * item.price).toLocaleString() +
                        ".000 VND"}
                    </TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default OrderDetail;
