import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import logoimage from "../assets/images/logo.svg";
import { Tween, Timeline } from "react-gsap";

const navItems = [
  {
    title: "Our Goal",
    url: "#ourgoal",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Bolg",
    url: "https://mirror.xyz/cake-app-deployer.eth",
  },
];

export default function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="transparent"
        sx={{
          position: "relative",
          color: "#000000",
          boxShadow: "0 0 12px 8px rgb(0 0 0 / 5%)",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
          <Toolbar>
            <Link variant="h6" sx={{ flexGrow: 1 }}>
              <Timeline
                progress={0.5}
                target={
                  <Box component="img" alt="logo" src={logoimage} />
                }
              >
                <Tween
                  to={{ y: '-10px' }}
                  duration={0.5}
                  ease="in"
                />
                <Tween
                  to={{ y: '10px' }}
                  duration={0.5}
                  ease="out"
                />
              </Timeline>
            </Link>
            <Box sx={{ fontFamily: "IBM Plex Mono" }}>
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  sx={{
                    color: "#000",
                    pl: { xs: 2, sm: 3, md: 5 },
                    fontWeight: "bold",
                    fontSize: { xs: 12, md: 14 },
                  }}
                  underline="none"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
