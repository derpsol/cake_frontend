import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoimage from "../../assets/images/logo.svg";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BigSVG from "../../components/bigSVG";
import Introduction from "../../components/Introduction";
import Detail from "../../components/Detail";
import Video from "../../components/Video";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

const navItems = [
  {
    picName: "./images/small1.png",
    title: "Brand Controlled Website",
    content:
      "At the click of a button, deploy your client’s NFT collection on the blockchain and have a branded website to direct customers to.",
  },
  {
    picName: "./images/small2.png",
    title: "One Click Wallet Integration",
    content:
      "Integrate with platforms like Metamask and Coinbase Wallet to allow for a seamless token-gated purchasing process with security in mind, so customers can purchase seamlessly.",
  },
  {
    picName: "./images/small3.png",
    title: "Shopify Inventory Integration",
    content:
      "Integrate your Shopify account so you can supply products to NFT users without changing the backend of your business.",
  },
  {
    picName: "./images/small4.png",
    title: "Cake Managed Channel",
    content:
      "Engage with your users based on Cake’s records of how your customers interact with their digital collectibles.",
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  height: 230,
  borderRadius: 5,
  bgcolor: "background.paper",
  color: "#2b2b2b",
  boxShadow: 24,
  pt: 4,
  px: 4,
  pb: 3,
};

const { useLayoutEffect, useRef } = React;

type Props = {
  children: JSX.Element;
};

const RightBox: React.FC<Props> = ({ children }) => {
  return (
    <Box data-animate="move" sx={{ width: { xs: "100%", md: "40%" } }}>
      <Box data-animate="ease-right-move">{children}</Box>
    </Box>
  );
};

const LeftBox: React.FC<Props> = ({ children }) => {
  return (
    <Box data-animate="left-move" sx={{ width: { xs: "100%", md: "40%" } }}>
      <Box data-animate="ease-left-move">{children}</Box>
    </Box>
  );
};

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
      <Header />
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4, color: "#2b2b2b" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { sm: "flex" } }}>
            <Timeline
              progress={0.5}
              target={
                <Box sx={{ flex: 1, mr: 4 }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: 24, sm: 48, md: 64, lg: 96 },
                      pt: { sm: 5, md: 10, lg: 15 },
                      fontFamily: "Archivo",
                    }}
                  >
                    CAKE
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        pt: { xs: 1, md: 2 },
                        fontSize: { xs: 16, sm: 20 },
                      }}
                    >
                      Metaverse and NFTs are made as easy as a piece of Cake.
                    </Typography>
                    <Typography
                      sx={{
                        pt: { xs: 1, sm: 2, md: 4 },
                        fontSize: { xs: 16, sm: 20 },
                      }}
                    >
                      Cake is the Web3 and Metaverse Easy-Bake Oven for Brands!
                      Let us handle the digital collectible tools and
                      deployment, so you can focus on your brand. Sign-up to get
                      priority access to the platform.
                    </Typography>
                    <Typography
                      sx={{
                        pt: { xs: 1, sm: 2, md: 4 },
                        fontSize: { xs: 16, sm: 20 },
                      }}
                    >
                      Let’s make it a Cake walk!
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      color: "inherit",
                      fontWeight: "bold",
                      backgroundColor: "#72ff66",
                      fontSize: { xs: 12, md: 14 },
                      px: { xs: 1, md: 1.5, lg: 2 },
                      py: { xs: 0.5, md: 1, lg: 1.5 },
                      mt: 3,
                      fontFamily: "IBM Plex Mono",
                      textTransform: "none",
                    }}
                    onClick={handleOpen}
                  >
                    Join Waitlist
                  </Button>
                </Box>
              }
            >
              <Tween
                from={{ x: -100, opacity: 0 }}
                to={{ x: 0, opacity: 1 }}
                duration={1}
              />
            </Timeline>
            <BigSVG></BigSVG>
          </Box>
        </Box>
        <Introduction />
        <Box
          sx={{
            mt: { xs: 4, md: 8 },
            display: "flex",
            flexWrap: "wrap",
          }}
          justifyContent="space-between"
        >
          {navItems.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <ScrollTrigger start="-100px center">
                  <Timeline
                    progress={0.5}
                    target={
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          pt: { xs: 2, md: index % 2 == 1 ? 4 : 0 },
                          pl: { xs: 0, md: index % 4 == 2 ? 4 : 0 },
                          pr: { xs: 0, md: index % 4 == 3 ? 4 : 0 },
                          width: { xs: "100%", md: "40%" },
                        }}
                      >
                        <Box
                          component="img"
                          alt="small"
                          sx={{ width: "10%" }}
                          src={item.picName}
                        />
                        <Box sx={{ pl: 1 }}>
                          <Typography
                            variant="h6"
                            component="h6"
                            sx={{ pb: 1 }}
                            fontWeight="bold"
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="h6" component="h6">
                            {item.content}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  >
                    <Tween
                      from={{ x: -100, y: index > 1 ? 100 : -100, opacity: 0 }}
                      to={{ x: 0, y: 0, opacity: 1 }}
                      duration={1}
                    />
                  </Timeline>
                </ScrollTrigger>
              );
            } else if (index % 2 == 1) {
              return (
                <ScrollTrigger start="--100px center">
                  <Timeline
                    progress={0.5}
                    target={
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          pt: { xs: 2, md: index % 2 == 1 ? 4 : 0 },
                          pl: { xs: 0, md: index % 4 == 2 ? 4 : 0 },
                          pr: { xs: 0, md: index % 4 == 3 ? 4 : 0 },
                          width: { xs: "100%", md: "40%" },
                        }}
                      >
                        <Box
                          component="img"
                          alt="small"
                          sx={{ width: "10%" }}
                          src={item.picName}
                        />
                        <Box sx={{ pl: 1 }}>
                          <Typography
                            variant="h6"
                            component="h6"
                            sx={{ pb: 1 }}
                            fontWeight="bold"
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="h6" component="h6">
                            {item.content}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  >
                    <Tween
                      from={{ x: 100, y: index > 1 ? 100 : -100, opacity: 0 }}
                      to={{ x: 0, y: 0, opacity: 1 }}
                      duration={1}
                    />
                  </Timeline>
                </ScrollTrigger>
              );
            }
          })}
        </Box>
        <Video />
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
        <Typography
          variant="h6"
          component="h6"
          sx={{ flexGrow: 1, m: "auto", textAlign: "center", mt: 12 }}
        >
          Get priority access to the platform!
        </Typography>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              color: "inherit",
              fontWeight: "bold",
              backgroundColor: "#72ff66",
              px: 2,
              py: 1.5,
              mt: 3,
              fontFamily: "IBM Plex Mono",
              textTransform: "none",
            }}
            onClick={handleOpen}
          >
            Join Waitlist
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style }}>
              <Button
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 4,
                  top: 4,
                  backgroundRepeat: "no-repeat",
                  minWidth: 32,
                  height: 32,
                  backgroundSize: "50%",
                  backgroundPosition: "50%",
                  cursor: "pointer",
                  backgroundImage:
                    'url("https://uploads-ssl.webflow.com/635fb63b2936c2d0fcb996f8/636418eba7a05b282bc4aad7_5f905523a555c60834ffee12_cross.svg")',
                }}
              ></Button>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box component="img" alt="logo" src={logoimage} />
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontFamily: "Archivo" }}
                >
                  CAKE
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "IBM Plex Mono",
                  fontSize: 14,
                  mt: 4,
                  fontWeight: "bold",
                }}
              >
                Email*
              </Typography>
              <TextField
                id="standard-start-adornment"
                sx={{ width: "100%", mt: 2 }}
                variant="standard"
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "#2b2b2b",
                  backgroundColor: "#72ff66",
                  py: 1,
                  mt: 3,
                  width: "100%",
                  fontFamily: "IBM Plex Mono",
                  fontSize: 14,
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </Box>
          </Modal>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
