import {
  CardMedia,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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
const Users = () => {
  // const [users, setUser] = useState("");
  const { users } = useContext(ContextProduct);
  console.log("users", users);
  // useEffect(() => {
  //   fetch("http://fashion-v6.onrender.com/all")
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }, []);

  const handleRemove = (id) => {
    fetch(`http://fashion-v6.onrender.com/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
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
                Ảnh{" "}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                Tên khách hàng
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
                Giới tính
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
                Ngày tạo/ngày cập nhập
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                  width: "100px"
                }}
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.data.map((user, index) => {
              return (
                <StyledTableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    component="th"
                    scope="row"
                  >
                    <CardMedia
                      component="img"
                      image={require(`../../../public/images/${
                        user.image ? user.image : "err.png"
                      }`)}
                      alt="green iguana"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    />
                    {user.username}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "150px",
                    }}
                  >
                    {user.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "150px",
                    }}
                  >
                    {user.gender}{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "150px",
                    }}
                  >
                    {user.telephone}{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "200px",
                    }}
                  >
                    {user.createdAt}{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "200px",
                    }}
                  >
                    {user.updatedAt}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      width: "50px",
                    }}
                  >
                    <DeleteIcon
                      onClick={() => handleRemove(user._id)}
                      sx={{ color: "#1976d2" }}
                    />
                    <EditOutlinedIcon
                      onClick={() => console.log(user._id)}
                      sx={{ color: "#1976d2",marginLeft: "30px" }}
                    />
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

export default Users;
