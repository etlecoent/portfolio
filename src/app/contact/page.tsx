import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

export default function Contact({
  email = '',
  linkedin = ''
}: {
  email: string;
  linkedin: string;
}) {
  return (
    <Grid container spacing={4} columns={{ xs: 4, sm: 8 }}>
      <Grid
        size={{ xs: 4, sm: 8 }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant='h3' gutterBottom align='center'>
          Get In Touch
        </Typography>
        <Typography
          variant='body1'
          align='center'
          sx={{ mb: 4, maxWidth: 600 }}
        >
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out through any of the platforms
          below!
        </Typography>

        <Box display='flex' gap={2} justifyContent='center'>
          <Link
            href={`https://www.linkedin.com/in/${linkedin}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <IconButton color='primary' size='large'>
              <LinkedInIcon fontSize='large' />
            </IconButton>
          </Link>

          <Link href={`mailto:${email}`} aria-label='Email'>
            <IconButton size='large' color='primary'>
              <EmailIcon fontSize='large' />
            </IconButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
