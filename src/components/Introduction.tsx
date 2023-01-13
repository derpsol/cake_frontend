import Typography from "@mui/material/Typography";

export default function Introduction() {
  return (
    <>
      <Typography
        id="ourgoal"
        variant="h6"
        component="h6"
        sx={{
          flexGrow: 1,
          width: { xs: "80%", md: "59%" },
          m: "auto",
          textAlign: "center",
          mt: { xs: 2, sm: 4, lg: 6 },
          pt: { xs: 2, sm: 4, lg: 6 },
          fontSize: { xs: 16, sm: 20 },
        }}
      >
        Be the Metaverse and Web3 guru on your team with the power of Cake! The
        frictionless NFT minting and deployment platform that empowers agencies
        with the ability to control and manage digital collectible campaigns as
        they would any ordinary product launch.
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          flexGrow: 1,
          textAlign: "center",
          mt: 3,
          fontSize: { xs: 16, sm: 20 },
        }}
      >
        How can Cake help?
      </Typography>
    </>
  );
}
