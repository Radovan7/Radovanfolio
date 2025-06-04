import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "../ThemeContext";

const Projects = ({ projects }) => {
  const { mode } = useThemeContext();
  const theme = useTheme();

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[8],
                    cursor: "pointer",
                  },
                  bgcolor:
                    mode === "dark" ? "background.paper" : "background.default",
                  color: mode === "dark" ? "text.primary" : "text.primary",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
