import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

export default function Video() {
  return (
    <>
      <Box alignItems="center" sx={{ mt: 12, display: { sm: "flex" } }}>
        <ScrollTrigger start="-100px center">
          <Timeline
            progress={0.5}
            target={
              <Box sx={{ width: { xs: "70%", sm: "25%" }, m: "auto" }}>
                <CardMedia
                  component="video"
                  autoPlay
                  loop
                  muted
                  image="https://uploads-ssl.webflow.com/635fb63b2936c2d0fcb996f8/6362a2e3cb8c6b0a216208f1_Top_left-transcode.mp4"
                  sx={{ borderRadius: "10%" }}
                ></CardMedia>
              </Box>
            }
          >
            <Tween
              from={{ x: -100, y: -100, opacity: 0 }}
              to={{ x: 0, y: 0, opacity: 1 }}
              duration={1}
            />
          </Timeline>
        </ScrollTrigger>
        <ScrollTrigger start="-100px center">
          <Timeline
            progress={0.5}
            target={
              <Box
                sx={{
                  width: { xs: "70%", sm: "25%" },
                  ml: { xs: "auto", sm: "40%" },
                  mt: { xs: 2, sm: 0 },
                  mr: "auto",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "10%",
                    width: { xs: "100%", sm: "50%" },
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="video"
                    autoPlay
                    loop
                    muted
                    image="https://uploads-ssl.webflow.com/635fb63b2936c2d0fcb996f8/6362a31d4f186e37caec1bfe_Top_right-transcode.mp4"
                    sx={{ width: "180%", ml: "-50%" }}
                  ></CardMedia>
                </Box>
              </Box>
            }
          >
            <Tween
              from={{ x: 100, y: -100, opacity: 0 }}
              to={{ x: 0, y: 0, opacity: 1 }}
              duration={1}
            />
          </Timeline>
        </ScrollTrigger>
      </Box>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          flexGrow: 1,
          width: "81%",
          m: "auto",
          textAlign: "center",
          mt: 4,
        }}
      >
        “Web3 is a powerful tool for any brands, and we wanted to get there
        faster, and Cake helped us do just that.”
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          flexGrow: 1,
          width: "81%",
          m: "auto",
          textAlign: "center",
          mt: 4,
          fontFamily: "IBM Plex Mono",
          fontSize: 14,
        }}
      >
        CEO of EQLZ
      </Typography>
      <Box sx={{ mt: -4, display: { sm: "flex" } }}>
        <ScrollTrigger start="-100px center">
          <Timeline
            progress={0.5}
            target={
              <Box sx={{ mt: 12, width: { xs: "70%", sm: "50%" }, mx: "auto" }}>
                <Box
                  sx={{
                    borderRadius: "10%",
                    width: { xs: "100%", sm: "50%" },
                    overflow: "hidden",
                    m: "auto",
                    ml: { xs: "0%", sm: "40%" },
                  }}
                >
                  <CardMedia
                    component="video"
                    autoPlay
                    loop
                    muted
                    height="300px"
                    image="https://uploads-ssl.webflow.com/635fb63b2936c2d0fcb996f8/6362a32f28222e37fc1d6c42_Bottom_left-transcode.mp4"
                    sx={{ width: "180%", ml: "-40%" }}
                  ></CardMedia>
                </Box>
              </Box>
            }
          >
            <Tween
              from={{ x: -100, y: 100, opacity: 0 }}
              to={{ x: 0, y: 0, opacity: 1 }}
              duration={1}
            />
          </Timeline>
        </ScrollTrigger>
        <ScrollTrigger start="-100px center">
          <Timeline
            progress={0.5}
            target={
              <Box
                sx={{
                  width: { xs: "70%", sm: "25%" },
                  ml: { xs: "auto", sm: "25%" },
                  textAlign: "center",
                  mt: { xs: 2, sm: 0 },
                  mr: "auto",
                }}
              >
                <CardMedia
                  component="video"
                  autoPlay
                  loop
                  muted
                  image="https://uploads-ssl.webflow.com/635fb63b2936c2d0fcb996f8/6362a2e3cb8c6b0a216208f1_Top_left-transcode.mp4"
                  sx={{ borderRadius: "10%" }}
                ></CardMedia>
              </Box>
            }
          >
            <Tween
              from={{ x: 100, y: 100, opacity: 0 }}
              to={{ x: 0, y: 0, opacity: 1 }}
              duration={1}
            />
          </Timeline>
        </ScrollTrigger>
      </Box>
    </>
  );
}
