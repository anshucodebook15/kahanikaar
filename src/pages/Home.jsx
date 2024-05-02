import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Theme } from "../theme/Theme";

import klogo from "../assets/img/klogo.png";

const CountBox = ({ count, label }) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={6}>
      <Box bgcolor={"black"} sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={[
            {
              fontSize: {
                lg: 60,
                md: 60,
                sm: 60,
                xs: 60,
              },
              fontWeight: 600,
              pb: 1,
            },
          ]}
        >
          {count}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: {
              lg: 20,
              md: 20,
              sm: 30,
              xs: 30,
            },
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Grid>
  );
};

export default function Home() {
  return (
    <>
      <Box bgcolor={"black"}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={""}
        >
          <Grid item lg={12}>
            <Typography>
              <i>A venture by @siddhartSaxena & Team</i>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container justifyContent={""} alignItems={""} spacing={""}>
          <Grid item lg={2}>
            <img src={klogo} alt="" style={{ width: 100 }} />
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Box>

      {/* Title H1 Section */}
      <Box sx={{ border: 1, borderColor: "common.white", p: 8 }}>
        <h1 className="dancing-script-700 title_kk">Kahanikaar</h1>
        <p>
          <i>" A Way To Narate Your Story "</i>{" "}
        </p>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid
            container
            justifyContent={""}
            alignItems={"center"}
            spacing={""}
          >
            <Grid item lg={6}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/353/221/original/movie-characters-man-and-woman-in-romantic-screenplay-love-story-in-cinema-film-script-strip-and-oscar-award-for-best-cinematography-entertainment-concept-illustration-free-vector.jpg"
                alt=""
                srcset=""
                width={"100%"}
              />
            </Grid>
            <Grid item lg={6}>
              <Box sx={{ p: 3 }}>
                <p>
                  <i>
                    Storytelling is the vivid description of ideas, beliefs,
                    personal experiences, and life- lessons through stories or
                    narratives that evoke powerful emotions and insights.
                    Storytelling has advantages over the communication tech-
                    niques commonly used in organizations, be they electronic
                    mail, reports, or formal speeches.
                  </i>{" "}
                </p>
                <p>
                  <i>
                    According to MasterClass, there are at least 4 ways to
                    communicate through story: oral storytelling, visual
                    storytelling, written storytelling, and digital
                    storytelling. However, there are many other types of
                    storytelling as well, such as musical storytelling, dance
                    storytelling, and more
                  </i>{" "}
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Count Overview */}
      <Box sx={{ py: 8 }}>
        <Grid container justifyContent={""} alignItems={""} spacing={""}>
          <CountBox count={"102+"} label={"Project Completed"} />
          <CountBox count={"20"} label={"Core Team"} />
          <CountBox count={"75+"} label={"Desired Location"} />
          <CountBox count={"2000+"} label={"Reviews"} />
        </Grid>
      </Box>

      {/* Project Section */}
      <Box sx={{ textAlign: "center", py: 12 }}>
        <Typography
          variant="h2"
          sx={[Theme.typo.h2_head, { color: "common.white", py: 2 }]}
        >
          Portfolio
        </Typography>
      </Box>

      <Box className={"flexgrpgrid"}>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://miro.medium.com/v2/resize:fit:720/1*ibN0ptxrg6LkZ5DZbKv2YA.png"
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://img.freepik.com/free-psd/flat-design-drive-cinema-template_23-2150154272.jpg"
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://img.freepik.com/free-psd/vertical-poster-retro-cinema_23-2148946920.jpg"
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://img.freepik.com/free-vector/flat-design-cinema-festival-invitation_23-2149916026.jpg"
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://media.istockphoto.com/id/1065406736/vector/cinema-festival-retro-poster-vintage-camcorder.jpg?s=612x612&w=0&k=20&c=fBGXq-JW4ZFKvb2uAXQl4r0q30Z0-uy61mT9_4ZqeJI="
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
        <Box sx={{ width: "25%" }}>
          <img
            src="https://img.freepik.com/premium-vector/cinema-night-movie-film-reel-3d-glasses_8071-29435.jpg"
            alt=""
            srcset=""
            width={"100%"}
          />
        </Box>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography
            variant="h2"
            sx={[Theme.typo.h2_head, { color: "common.white", py: 2 }]}
          >
            Specialists
          </Typography>
        </Box>

        <Box sx={{ py: 6 }}>
          <Grid container justifyContent={""} spacing={""}>
            <Grid item lg={6}>
              <Box display={"flex"} justifyContent={"center"}>
                <Box sx={{ overflow: "hidden", width: "70%" }}>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:683/0*JQGt5cN0oZbo4uLV.jpg"
                    alt=""
                    className="img100"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h2" sx={[Theme.typo.h2_head, { p: 0 }]}>
                  <i>Siddharth Saxena</i>
                </Typography>
                <Typography
                  variant="h2"
                  sx={[Theme.typo.body_sm, { p: 0, fontWeight: 200 }]}
                >
                  <i>
                    <p>Director & Writter</p>
                  </i>
                </Typography>

                <Typography
                  variant="body"
                  sx={[Theme.typo.body, { width: { lg: "40%" }}]}
                >
                  Storytelling is the vivid description of ideas, beliefs,
                  personal experiences, and life- lessons through stories or
                  narratives that evoke powerful emotions and insights.
                  Storytelling has advantages over the communication tech-
                  niques commonly used in organizations, be they electronic
                  mail, reports, or formal speeches.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
