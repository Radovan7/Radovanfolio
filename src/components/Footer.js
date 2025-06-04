import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 3,
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: "auto",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2">Built with ❤️ by Radovan</Typography>
    </Box>
  );
};

export default Footer;
