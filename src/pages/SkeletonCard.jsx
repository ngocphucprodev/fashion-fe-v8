import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Button,
  FormLabel,
  FormControl,
} from "@mui/material";
import React, { useContext, useReducer } from "react";
import { ContextProduct } from "../context/ContextApiProducts";
import reducer from "../context/reducer";
const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    padding: "5px 10px",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};

const SkeletonCard = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
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
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo sơmi nam
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo Sơmi Nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo sơmi trẻ em
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo polo thể thể thao
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo polo trẻ em{" "}
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo Polo Nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Áo Polo Nam
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
            >
              Quần kaki Nữ
            </Button>
            <Button
              sx={{
                border: "1px solid #F2F2F2",
                textTransform: "capitalize",
                backgroundColor: "#F2F2F2",
                boxShadow: "unset",
                color: "#7A7A9D",
                marginTop: "10px",
              }}
              variant="contained"
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
              />
              <FormControlLabel
                value="fds"
                control={<Radio />}
                label="300.000đ - 450.000đ"
                sx={{ ...formControlLabelStyle }}
              />

              <FormControlLabel
                value="othe1r"
                control={<Radio />}
                label="500.000đ - 700.000đ"
                sx={{ ...formControlLabelStyle }}
              />

              <FormControlLabel
                value="700.000"
                control={<Radio />}
                label="Trên 700.000đ"
                sx={{ ...formControlLabelStyle }}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Array.apply(null, Array(12)).map((val, idx) => (
          <Grid item xs={4} sx={{ marginBottom: "20px" }} key={idx}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={250} height={300} />

              <Skeleton variant="rounded" width={250} height={20} />

              <Skeleton variant="rounded" width={100} height={20} />
              <Stack direction="row" sx={{ marginTop: "10px" }} spacing={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SkeletonCard;
