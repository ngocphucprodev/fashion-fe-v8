import { Container } from "@mui/material";
import React, { useContext } from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Dashboard from "./pages/admin/Dashboard";
import Routes from "./routes/Routes";
import { AuthContext } from "./context/ContextApiProducts";

const Main = () => {
  const { dataLogin } = useContext(AuthContext);
  //console.log(dataLogin);
  //   const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  let conponent;

  if (dataLogin) {
    dataLogin.role
      ? (conponent = <Dashboard />)
      : (conponent = (
          <>
            <Header />
            <Container sx={{ mt: 15 }}>
              <Routes />
            </Container>
          </>
        ));
  } else {
    conponent = (
      <>
        <Header />
        <Container sx={{ mt: 15 }}>
          <Routes />
        </Container>
      </>
    );
  }

  return <React.Fragment>{conponent}</React.Fragment>;
};

export default Main;
