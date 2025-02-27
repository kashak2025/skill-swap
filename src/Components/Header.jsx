import * as React from "react";
import { useEffect } from "react";
import IMG from "../images/dark-horizontal.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ScrollReveal from "scrollreveal";

// import Tooltip from "@mui/material/Tooltip";
// import AdbIcon from "@mui/icons-material/Adb";
// import Avatar from "@mui/material/Avatar";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router";

const pages = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Market",
    path: "/market",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  useEffect(() => {
    ScrollReveal().reveal(".header");
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Search

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div class="header">
      <AppBar position="static" sx={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box class="row" sx={{ flexGrow: 1 }}>
              {/* logo */}
              <Box class="logo">
                <Box sx={{ width: "250px" }}>
                  <NavLink to={"/"}>
                    <img src={IMG} width={"100%"} alt="" />
                  </NavLink>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                justifyContent: "end",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#666" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{
                    color: "#000",
                    borderColor: "#000",
                    border: "1px solid #eee",
                    borderRadius: "10px",
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box
              sx={{
                flexGrow: { lg: 0, md: 0, sm: 0, xs: 1 },
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  // justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: "center", width: "500px", top: "0px" }}
                    >
                      <NavLink to={page.path}>
                        <Box sx={{color: "#0E0E7A",}}>{page.name}</Box>
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { lg: "flex", xs: "none", md: "flex" },
                ml: "10px",
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      background: "#fff",
                      color: "#FFE092",
                      transition: "0.5s",
                    },
                    transition: "0.5s",
                    textTransform: "capitalize",
                    my: 2,
                    display: "block",
                    fontSize: "20px",
                    lineHeight: "0.75",
                    fontWeight: "600",
                    fontFamily: '"Outfit", serif',
                  }}
                >
                  <NavLink to={page.path}>
                    <Box sx={{"&:hover": {color:'#FFE092',transition:'0.5s'},transition:'0.5s',color: "#0E0E7A",}}>{page.name}</Box>
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                ml: "20px",
                display: { lg: "block", md: "none", sm: "block", xs: "none" },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                  border: "1px solid #0E0E7A",
                  borderRadius: "15px",
                }}
              >
                <NavLink to={"/signup"}>
                  <Box sx={{color: "#0E0E7A",textTransform:'capitalize'}}>
                    Signup
                  </Box>
                </NavLink>
              </Button>
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;
