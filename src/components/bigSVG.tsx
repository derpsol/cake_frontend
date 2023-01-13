import Box from "@mui/material/Box";
import mainback from "../assets/images/mainback.svg";
import { Tween, Timeline, ScrollTrigger,  } from "react-gsap";

export default function BigSVG() {
  return (
    <>
      <ScrollTrigger start="-100px center">
        <Timeline
          progress={0.5}
          target={
            <Box
              sx={{
                flex: 1,
                ml: "32px",
                textAlign: "center",
              }}
            >
              <Box
                className="mainback"
                component="img"
                alt="logo"
                sx={{ width: { xs: "70%", md: "100%" } }}
                src={mainback}
              />
            </Box>
          }
        >
          <Tween
            from={{ x: "500px", rotation: 180 }}
            to={{ x: "0px", rotation: 0 }}
            duration={1}
            ease="back.out(0.1)"
          />
        </Timeline>
      </ScrollTrigger>
    </>
  );
}
