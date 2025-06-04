import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useThemeContext } from "../ThemeContext";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "About" },
  { label: "Projects", id: "Projects" },
  { label: "Contact", id: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { mode } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? mode === "dark"
              ? "rgba(18, 18, 18, 0.9)"
              : "rgba(255, 255, 255, 0.9)"
            : "transparent",
          boxShadow: scrolled ? 1 : 0,
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "all 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <Toolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.background.paper,
            width: 240,
            zIndex: 1001,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
