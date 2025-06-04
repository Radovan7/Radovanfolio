import React from "react";
import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Avatar,
  Grid,
  Divider,
  Box,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import profile from "../profile";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const { about, skills, projects } = profile;
  const theme = useTheme();

  return (
    <Container
      id="About"
      maxWidth={false}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: "relative",
        zIndex: 100,
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box width="100%" maxWidth="lg">
        <Box mb={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            {about.title}
          </Typography>
          <TypeAnimation
            sequence={[about.description, 1000]}
            wrapper="span"
            cursor={true}
            repeat={0}
            style={{
              display: "inline-block",
              color: theme.palette.text.secondary,
            }}
          />
        </Box>

        <Box mt={6} mb={6}>
          <Typography variant="h5" gutterBottom id="Projects">
            Notable Projects
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: theme.palette.divider }} />
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={project.title}
                component={motion.div}
                variants={animationVariants}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      borderColor: theme.palette.divider,
                      display: "flex",
                      flexDirection: "column",
                      transition:
                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: theme.shadows[8],
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                      }}
                    >
                      <Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2">
                          {project.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.divider,
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  My Skills
                </Typography>
                <Divider sx={{ mb: 2, bgcolor: theme.palette.divider }} />
                <Grid container spacing={2} justifyContent="center">
                  {skills.map((skill) => (
                    <Grid
                      item
                      xs={6}
                      sm={4}
                      md={3}
                      key={skill.name}
                      component={motion.div}
                      variants={animationVariants}
                      transition={{
                        duration: 0.5,
                        delay: skills.indexOf(skill) * 0.2,
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{
                          mb: 1,
                          p: 1,
                          borderRadius: 1,
                          "&:hover": {
                            backgroundColor: theme.palette.action.hover,
                          },
                        }}
                      >
                        <Avatar
                          sx={{ bgcolor: skill.color, width: 40, height: 40 }}
                        >
                          <skill.Icon
                            size={20}
                            color={theme.palette.icon.main}
                          />
                        </Avatar>
                        <Stack spacing={0.5}>
                          <Typography
                            variant="body1"
                            sx={{ color: theme.palette.text.primary }}
                          >
                            {skill.name}
                          </Typography>
                          <Chip
                            label={skill.name}
                            color="secondary"
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: theme.palette.primary.main,
                              color: theme.palette.text.primary,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
