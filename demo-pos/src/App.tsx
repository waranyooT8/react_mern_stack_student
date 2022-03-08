import { Container, GlobalStyles } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ReportPage from "./components/pages/ReportPage";
import ShopPage from "./components/pages/ShopPage";
import StockCreatePage from "./components/pages/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage";
import StockPage from "./components/pages/StockPage";
import TransactionPage from "./components/pages/TransactionPage";
import { useDispatch, useSelector } from "react-redux";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const theme = createTheme({
  palette: {
    background: {
      default: "#CFD2D6",
    },
  },
});

type AppProps = {};
export default function App(props: AppProps) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router
        basename={process.env.REACT_APP_IS_PRODUCTION === "1" ? "/demo" : ""}
      >
        <Switch>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* Header */}
            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            <Menu open={open} handleDrawerClose={handleDrawerClose} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
              }}
            >
              <Container>
                <DrawerHeader />
                {/* Pages Define */}
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact={true} path="/stock" component={StockPage} />
                <Route path="/stock/create" component={StockCreatePage} />
                <Route path="/stock/edit/:id" component={StockEditPage} />
                <Route path="/report" component={ReportPage} />
                <Route path="/transaction" component={TransactionPage} />
                <Redirect exact={true} path="/" to="/login" />
                <Route path="/" component={NotFoundPage} />
              </Container>
            </Box>
          </Box>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const NotFoundPage = () => <div>Not found</div>;
