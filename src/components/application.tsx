import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import logoimage from "../../assets/images/logo.svg";
import TextField from "@mui/material/TextField";
import { gsap } from "gsap";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        id="projects"
        variant="h6"
        component="h6"
        sx={{
          mt: { xs: 2, md: 4, lg: 6 },
          pt: { xs: 2, md: 4, lg: 6 },
          fontFamily: "IBM Plex Mono",
          fontSize: 14,
        }}
      >
        Built on Cake
      </Typography>
      <Box sx={{ display: { sm: "flex" } }}>
        <Box sx={{ mr: 1, mt: { xs: 4, md: 8, lg: 12 } }}>
          <Box
            component="img"
            alt="small"
            sx={{ width: "100%" }}
            src="./images/dragon.png"
          />
          <Typography variant="h6" component="h6" sx={{ mt: 1 }}>
            EQLZ – Reimagining the sneaker creation process
          </Typography>
        </Box>
        <Box sx={{ ml: 1, mt: { xs: 4, md: 8, lg: 12 } }}>
          <Box
            component="img"
            alt="small"
            sx={{ width: "100%" }}
            src="./images/shoes.png"
          />
          <Typography variant="h6" component="h6" sx={{ mt: 1 }}>
            BAZ Golf – Fore the love of the game
          </Typography>
        </Box>
      </Box>
    </>
  );
}
