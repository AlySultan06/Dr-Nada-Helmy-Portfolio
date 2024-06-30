/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";

import { useTheme } from "@emotion/react";

import { Link } from "react-router-dom";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [active, setActive] = React.useState(["active", "", "", "", ""]);
  const [pathName, setPathName] = React.useState(window.location.pathname);

  const pages = ["Home", "About", "Skills", "Projects", "Contact"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const hrefs = React.useMemo(
    () => ["/", "/about", "/skills", "/projects", "/contact"],
    []
  );

  React.useEffect(() => {
    setInterval(() => {
      const currentPath = window.location.pathname;
      const newActive = ["/", "/about", "/skills", "/projects", "/contact"].map(
        (href, index) => (currentPath === href ? "active" : "")
      );
      setActive(newActive);
    }, 0);
  }, []);

  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* pc */}

          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "colors.main",
              textDecoration: "none",
            }}
          >
            NADA
          </Typography>

          {/* mobile */}
          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },

              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "colors.main",
              textDecoration: "none",
            }}
          >
            NADA
          </Typography>

          {/* mobile */}

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              onClick={() => setAnchorElNav(true)}
              sx={{
                color: "colors.secondary",
                fontWeight: "bold",
                "&:hover": {
                  color: "colors.main",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={anchorElNav}
              onClose={() => setAnchorElNav(false)}
              hideBackdrop={false}
            >
              <CloseIcon
                sx={{
                  color: "colors.secondary",
                  alignSelf: "flex-end",
                  mt: "15px",
                  fontSize: "35px",
                  mr: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setAnchorElNav(false)}
              />
              <List sx={{ width: "60vw" }}>
                {pages.map((page, i) => (
                  <ListItem
                    className={active[i]}
                    key={page}
                    component={Link}
                    to={hrefs[i]}
                    onClick={() => setAnchorElNav(false)}
                    sx={{
                      my: 2,
                      display: "block",
                      width: "auto",
                      color: "colors.secondary",
                      fontWeight: "600",
                      "&:hover": { color: "colors.main" },
                    }}
                  >
                    {page}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* pc */}
          <List sx={{ display: { xs: "none", sm: "flex" }, py: "0px" }}>
            {pages.map((page, i) => (
              <ListItem
                className={active[i]}
                key={page}
                component={Link}
                to={hrefs[i]}
                sx={{
                  my: "9px",
                  color: "colors.secondary",
                  display: "block",
                  width: "auto",
                  fontWeight: "600",
                  "&:hover": { color: "colors.main" },
                }}
              >
                {page}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
