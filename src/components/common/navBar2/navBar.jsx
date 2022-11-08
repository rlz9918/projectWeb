import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import '../navBar2/navBar-style.css'
import isoLogo from "../../../assets/Banner/Isologo.png"

export default function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = [
        {name:"Inicio", ref:props.inicio}, 
        {name:"Galeria", ref:props.galeryRef},
        {name: "New", ref:props.newContent}, 
        {name: "News Letter", ref:props.newsLetter}
    ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (reference) => {
    setAnchorElNav(null);
    clickHandler(reference)
  };

  const clickHandler = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    })
    reference.current.focus()
  }

  return (
    <AppBar className="AppBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component='img' src={isoLogo} sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: "3%" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none"
              }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button className="btn-menu"onClick = {() => clickHandler(page.ref)} textAlign="center">{page.name}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box component='img' src={isoLogo} sx={{ display: { xs: "flex", md: "none" }, mr: 1, width: "4%" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page.ref)}
                sx={{ my: 2, color: "white", display: "block" }}
                className='MuiButton'
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

