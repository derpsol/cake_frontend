import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function Detail() {
  const app = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-animate='move']", {
        x: 500,
        duration: 0.1,
      });
      gsap.to("[data-animate='left-move']", {
        x: -500,
        duration: 0.1,
      });
      gsap.to("[data-animate='ease-right-move']", {
        x: -500,
        duration: 2,
        animationTimingFunction: "ease-in",
      });
      gsap.to("[data-animate='ease-left-move']", {
        x: 500,
        duration: 2,
        animationTimingFunction: "ease-in",
      });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <>
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
              <LeftBox>
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    pt: { xs: 2, md: index % 2 == 1 ? 4 : 0 },
                    pl: { xs: 0, md: index % 4 == 2 ? 4 : 0 },
                    pr: { xs: 0, md: index % 4 == 3 ? 4 : 0 },
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
              </LeftBox>
            );
          } else if (index % 2 == 1) {
            return (
              <RightBox>
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    pt: { xs: 2, md: index % 2 == 1 ? 4 : 0 },
                    pl: { xs: 0, md: index % 4 == 2 ? 4 : 0 },
                    pr: { xs: 0, md: index % 4 == 3 ? 4 : 0 },
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
              </RightBox>
            );
          }
        })}
      </Box>
    </>
  );
}
