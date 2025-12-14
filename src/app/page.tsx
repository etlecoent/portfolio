import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

export default function Home() {
  return (
    <Grid container columns={{ xs: 4, sm: 8 }} spacing={4}>
      <Grid
        size={{ xs: 4, sm: 4 }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Avatar
          variant='rounded'
          sx={{
            width: 300,
            height: 325
          }}
        >
          <Image
            src='/portfolio/profile_picture.jpg'
            alt='profile-picture'
            fill
          />
        </Avatar>
      </Grid>
      <Grid size={{ xs: 4, sm: 4 }}>
        <Typography variant='h4' gutterBottom>
          M.Eng & Full-Stack Developer & Data
        </Typography>
        <Typography variant='body1'>
          Curious about technology since my childhood, I chose to become a
          general engineer in order to better understand the workings of our
          modern world. Along the way, I discovered an interest in project
          management and a real passion for the Web which lead me to finish my
          schooling with a Web Dev bootcamp in order to become a Full Stack
          Developer.
        </Typography>
      </Grid>
    </Grid>
  );
}
