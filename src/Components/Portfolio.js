import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import delivery from "../Images/eloquent-yalow-6a6470.netlify.app-2021.12.01-23_04_41.png";
import medical from "../Images/medical-solution-41b97.web.app-2021.12.01-22_54_58.png";
import shop from "../Images/watch-gallery-a7b15.web.app-2021.12.01-22_56_35.png";

import Fade from "react-reveal";

/* let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio; */
const Portfolio = () => {
  return (
    <div>
      <Fade left duration={1000} distance="40px">
        <Container sx={{ pt: 15 }} id="project">
          <Typography
            sx={{ color: "orangered" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            MY WORKS
          </Typography>
          <Typography
            sx={{ color: "#FFD460" }}
            variant="h2"
            gutterBottom
            component="div"
          >
            Have a look at some of my previous works
          </Typography>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "300px",
                    backgroundImage: `url(${shop})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    className="projectdetail"
                    sx={{ backgroundColor: "#191919", width: "100%" }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Watch Gallery — a Full Stack Website
                      </Typography>
                      <CardActions>
                        <a href="https://watch-gallery-a7b15.web.app/">
                          <Button size="small">Live site</Button>
                        </a>
                        <a href="https://github.com/binjahid/client-site-for-watch-gallery">
                          <Button size="small">Client Link</Button>
                        </a>
                        <a href="https://github.com/binjahid/server-site-for-watch-gallery">
                          <Button size="small">Server Link</Button>
                        </a>
                      </CardActions>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "300px",
                    backgroundImage: `url(${delivery})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    className="projectdetail"
                    sx={{ backgroundColor: "#191919", width: "100%" }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Web Learner — React Website
                      </Typography>
                      <CardActions>
                        <a href="https://eloquent-yalow-6a6470.netlify.app/">
                          <Button size="small">Live site</Button>
                        </a>
                        <a href="https://github.com/binjahid/clienct-site-for-homato">
                          <Button size="small">Client Link</Button>
                        </a>
                      </CardActions>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "300px",
                    backgroundImage: `url(${medical})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    className="projectdetail"
                    sx={{ backgroundColor: "#191919", width: "100%" }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Medical Solution — React Website
                      </Typography>
                      <CardActions>
                        <a href="https://camera-shop-9b3ae.web.app/">
                          <Button size="small">Live site</Button>
                        </a>
                        <a href="https://github.com/binjahid/medical-solution">
                          <Button size="small">Code Link</Button>
                        </a>
                      </CardActions>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Fade>
    </div>
  );
};
export default Portfolio;
