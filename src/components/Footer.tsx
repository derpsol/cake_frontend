import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logoimage from '../assets/images/logo.svg';
import Typography from '@mui/material/Typography';

const channels = [
  {
    title : 'Twitter',
    url : 'https://twitter.com/TryCakeApp'
  },
  {
    title: 'Blog',
    url : 'https://mirror.xyz/cake-app-deployer.eth'
  },
  {
    title: 'Email',
    url : 'mailto:info@trycake.xyz'
  }
];

export default function Footer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ position: 'relative', backgroundColor: '#72ff66', color: '#000' }}>
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4, color: '#2b2b2b'}}>
          <Typography variant="h3" component="h3" sx={{ fontFamily: 'Archivo' }}>
              CAKE
          </Typography>
          {channels.map((channel) => (
            <Link
              variant="h6"
              sx={{ color: '#2b2b2b' }}
              href={channel.url}
              underline='none'
            >
              <Typography variant="h6" component="h6" sx={{ mt: 2}}>
                {channel.title}
              </Typography>
            </Link>
          ))}
          <Link
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
            underline='none'
          >
            <Box
              component="img"
              alt="logo"
              src={logoimage}
            />
            <Typography variant="subtitle1" component="p" sx={{ color: '#2b2b2b', fontSize: 12, fontFamily: 'IBM Plex Mono' }}>
              Copywrite ©2022 Cake App
            </Typography>
          </Link>
        </Container>
      </AppBar>
    </Box>
  );
}
