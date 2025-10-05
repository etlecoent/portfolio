import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' }
];

export default function NavBar() {
  return (
    <AppBar position='sticky' component='nav'>
      <Toolbar>
        <Box>
          {MENU_ITEMS.map(({ label, href }) => (
            <Button
              key={label}
              color='secondary'
              href={href}
              LinkComponent={Link}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
