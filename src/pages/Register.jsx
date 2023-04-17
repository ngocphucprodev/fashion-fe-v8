import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const initialUserData = {
  username: "",
  password: "",
  email: "",
  telephone: "",
  gender: "Male",
};

const showErr = {
  checked: "",
  component: "",
};
const Register = () => {
  const [form, setForm] = useState(initialUserData);
  const [message, setMessage] = useState(showErr);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    const isValid = Object.values(form).every((e) => e !== "");
    fetch("http://fashion-v6.onrender.com/store", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    if (isValid && form.email.includes("@")) {
      setMessage({
        checked: true,
        component: <Alert severity="success">Đăng ký thành công</Alert>,
      });
      // console.log(true);
      fetch("http://localhost:4000/store", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } else {
      setMessage({
        checked: false,
        component: (
          <Alert severity="error">
            {!isValid ? "Vui lòng điển đủ nội dung" : "Mail lôiux"}
          </Alert>
        ),
      });
      console.log(false);
    }
  };

  const handleInput = (e) => {
    console.log(form);
    // cóncheckMail = form.mail.includes(word);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
        variant="h5"
        component="div"
      >
        ĐĂNG KÝ
      </Typography>
      <TextField
        fullWidth
        sx={{ mt: 2, textAlign: "center" }}
        label="Họ và tên"
        name="username"
        onChange={handleInput}
      />
      <TextField
        sx={{ mt: 2, textAlign: "center" }}
        fullWidth
        label="Mật khẩu"
        name="password"
        onChange={handleInput}
      />
      <TextField
        sx={{ mt: 2, textAlign: "center" }}
        fullWidth
        label="Nhập lại mật khẩu"
        name="repassword"
        onChange={handleInput}
      />
      <TextField
        sx={{ mt: 2, textAlign: "center" }}
        fullWidth
        label="Email"
        name="email"
        onChange={handleInput}
      />
      <TextField
        sx={{ mt: 2, textAlign: "center" }}
        fullWidth
        label="Số điện thoại"
        name="telephone"
        onChange={handleInput}
      />
      <RadioGroup sx={{ display: "flex", flexDirection: "revert" }}>
        <FormControlLabel
          value="Male"
          checked={form.gender === "Male"}
          control={<Radio />}
          label="Nam"
          onChange={handleInput}
        />{" "}
        <FormControlLabel
          value="Female"
          checked={form.gender === "Female"}
          control={<Radio />}
          label="Nữ"
          onChange={handleInput}
        />{" "}
      </RadioGroup>
      {/* <input type="radio" name="gender" value="Male" onChange={handleInput} />
      <input type="radio" name="gender" value="Female" onChange={handleInput} /> */}
      <Button fullWidth variant="outlined" type="submit" onClick={handleSubmit}>
        ĐĂNG KÝ
      </Button>
      <Box sx={{ mt: 2 }}>{message.component}</Box>
    </Box>
  );
};

export default Register;
