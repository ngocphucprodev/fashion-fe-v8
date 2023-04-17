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
import { Link } from "react-router-dom";
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

const Orders = () => {
  const { orders } = useContext(ContextProduct);
  console.log(orders);

  const total = orders.data.reduce((total, item) => {
    return total + Number(item.totalpayment);
  }, 0);

  //console.log(total);

  return (
    <React.Fragment>
      <div>
        <table style={{ maxWidth: "auto", margin: "200px auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Họ và tên{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Số điện thoại
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Địa chỉ
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Tổng tiền&nbsp;(VND)
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Ngày đặt hàng
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
            {orders.data.map((orders, index) => {
              return (
                <StyledTableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "140px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    component="th"
                    scope="row"
                  >
                    <CardMedia
                      component="img"
                      image={require(`../../../public/images/${orders.image}`)}
                      alt="green iguana"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    {orders.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "100px",
                    }}
                  >
                    {orders.telephone}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "400px",
                    }}
                  >
                    {orders.address}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "150px",
                    }}
                  >
                    {orders.email}
                  </TableCell>
                  {/* <TableCell>
                      <List sx={{ overflow: "auto", maxHeight: "100px" }}>
                        {orders.description.split("/").map((list) => (
                          <ListItem>- {list}</ListItem>
                        ))}{" "}
                      </List>
                    </TableCell> */}
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "150px",
                    }}
                  >
                    {eval(orders.totalpayment).toLocaleString() + " VND"}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "200px",
                    }}
                  >
                    {orders.createdAt}{" "}
                  </TableCell>
                  {/* <TableCell sx={{ width: "100px", textAlign: "center" }}>
                      <DeleteIcon
                        onClick={() => handleRemove(orders._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell> */}
                  <TableCell align="center" sx={{ borderBottom: "none" }}>
                    <Link
                      to={`/orderdetail/${orders._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#333",
                        }}
                        variant="body2"
                      >
                        In
                        <PrintIcon
                          onClick={() => console.log(orders._id)}
                          sx={{
                            color: "#1976d2",
                            fontSize: "17px",
                            transform: "translate(7px,3px)",
                          }}
                        />
                      </Typography>
                    </Link>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Họ và tên{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Số điện thoại
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Địa chỉ
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Tổng tiền&nbsp;(VND)
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Ngày đặt hàng
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
        </table>
      </div>
    </React.Fragment>
  );
};

export default Orders;
