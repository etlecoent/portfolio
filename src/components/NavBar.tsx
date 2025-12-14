import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@mui/material';

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export default function NavBar() {
  return (
    <AppBar position='sticky' component='nav'>
      <Toolbar>
        <Box>
          <IconButton disabled>
            <Image
              src='/portfolio/logo.png'
              alt='logo'
              width={50}
              height={50}
            />
          </IconButton>
        </Box>
        {MENU_ITEMS.map(({ label, href }) => (
          <Box key={label}>
            <Button href={href} LinkComponent={Link}>
              <Typography color='textPrimary'>{label}</Typography>
            </Button>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}
