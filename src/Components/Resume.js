import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slide from "react-reveal";
import { Box } from "@mui/system";

const Resume = () => {
  return (
    <div style={{ backgroundColor: "#000524" }}>
      <Container sx={{ py: 15 }} id="aboutMe">
        <Slide left duration={1300}>
          <Box>
            <Typography
              sx={{ color: "white" }}
              variant="h6"
              gutterBottom
              component="div"
              align="center"
            >
              MY TOOLS & COMPETENCIES
            </Typography>
            <Typography
              sx={{ color: "#FFD460" }}
              variant="h2"
              gutterBottom
              component="div"
              align="center"
            >
              The Development Tools, I Use
            </Typography>
          </Box>
        </Slide>
        <Container>
          <Slide left duration={1300}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                  }}
                  elevation={3}
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      color: "orangered",
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    Front-End Development
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="HTML/CSS, JavaScript for static sites" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="React.js, Next.js, Firebase for reactive sites" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Material UI, Semantic UI, Bootstrap as CSS Framework" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Constantly Learning New Technology" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                  }}
                  elevation={3}
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "30px",
                      color: "orangered",
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    Back-End Development
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Node.js & Express powered SSR web apps" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="JWT, Best security practices, Firebase Admin" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Tools like Ejs, Pug, Validator, Dom-Purify, Sanitizer and more" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Constantly Learning New Technology" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Slide>
        </Container>
      </Container>
    </div>
  );
};

export default Resume;
