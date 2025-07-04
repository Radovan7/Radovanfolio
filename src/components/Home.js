import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import BackgroundBg from "./bg/BackgroundBg";
import profile from "../profile";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useThemeContext } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import Navbar from "./Navbar";

const Home = () => {
  const { home } = profile;
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();

  const handleClick = () => {
    const aboutElement = document.getElementById("About");
    aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Radovan's Portfolio - Frontend Developer | Open Source Enthusiast"
        />
        <meta
          name="keywords"
          content="portfolio, frontend developer, open source, React, JavaScript, web development"
        />
        <meta property="og:title" content="Radovan Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! I'm a passionate frontend developer..."
        />
        <title>Radovan Portfolio</title>
      </Helmet>

      <Navbar />

      <Box
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1100,
        }}
      >
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: theme.palette.icon.main,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 2,
            "&:hover": {
              color: theme.palette.icon.hover,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          {mode === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </IconButton>
      </Box>

      <BackgroundBg isDarkMode={mode === "dark"} />
      <Container
        id="home"
        maxWidth="lg"
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: theme.palette.text.primary,
          textAlign: "center",
          py: 8,
          pt: { xs: 12, sm: 16 },
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar
                alt="Radovan's Profile Picture"
                loading="lazy"
                src={home.avatarUrl}
                sx={{
                  width: 200,
                  height: 200,
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 0 20px ${theme.palette.primary.main}80`,
                  margin: "auto",
                  mb: 12,
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {home.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    color: theme.palette.icon.hover,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.palette.icon.main,
                    margin: "0 10px",
                    transition: "color 0.3s",
                  }}
                >
                  <link.icon size={32} />
                </motion.a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              sx={{
                fontWeight: "bold",
                letterSpacing: 2,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              {home.title}
            </Typography>
            <Typography
              variant="h5"
              component={motion.h5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontWeight: 300,
              }}
            >
              {home.role}
            </Typography>
            <Typography
              variant="body1"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                maxWidth: "600px",
                margin: "auto",
                textAlign: "justify",
              }}
            >
              {home.description}
            </Typography>
            <Button
              variant="contained"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                padding: "12px 24px",
                fontSize: "18px",
                textTransform: "uppercase",
                letterSpacing: 1,
                borderRadius: "30px",
                mt: 4,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {home.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
