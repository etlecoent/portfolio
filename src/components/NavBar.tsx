import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@mui/material';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' }
];

export default function NavBar() {
  return (
    <AppBar position='sticky' component='nav'>
      <Toolbar>
        <Box>
          <IconButton disabled>
            <Image src='/logo.png' alt='logo' width={50} height={50} />
          </IconButton>
        </Box>
        {MENU_ITEMS.map(({ label, href }) => (
          <Box key={label}>
            <Button color='primary' href={href} LinkComponent={Link}>
              <Typography variant='body1'>{label}</Typography>
            </Button>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}
