import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import profile from "../profile";
import emailjs from "emailjs-com";

const Contact = () => {
  const { contact } = profile;
  const theme = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container
      id="Contact"
      maxWidth="false"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: "relative",
        zIndex: 100,
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        backgroundColor: theme.palette.background.default,
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.text.primary,
        textAlign: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box width="100%" maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          {contact.title}
        </Typography>
        <TypeAnimation
          sequence={[`${contact.description}`, 1000]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: theme.palette.text.secondary,
          }}
        />

        <form onSubmit={sendEmail}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={contact.nameLabel}
                variant="outlined"
                name="from_name"
                required
                sx={{
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.primary.main },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.light,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.dark,
                    },
                  },
                  mb: 3,
                }}
              />
              <TextField
                fullWidth
                label={contact.emailLabel}
                variant="outlined"
                type="email"
                name="from_email"
                required
                sx={{
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.primary.main },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.light,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.dark,
                    },
                  },
                  mb: 3,
                }}
              />
              <TextField
                fullWidth
                label={contact.messageLabel}
                variant="outlined"
                multiline
                rows={6}
                name="message"
                required
                sx={{
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: theme.palette.primary.main },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.light,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.dark,
                    },
                  },
                  mb: 3,
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                    },
                    width: "180px",
                  }}
                >
                  {contact.sendButton}
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: theme.palette.secondary.main, fontWeight: 700 }}
              >
                {contact.connectTitle}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                {contact.links.map((link, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mx: 1,
                      color: theme.palette.icon.main,
                      "&:hover": {
                        color: theme.palette.icon.hover,
                      },
                    }}
                  >
                    <link.icon />
                  </IconButton>
                ))}
              </Box>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  href="/CV E.pdf"
                  download="CV E.pdf"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                    },
                    width: "150px",
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
