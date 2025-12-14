import type { Project as ProjectType } from '@/types/Project';

import Grid from '@mui/material/Grid';

import Project from './Project';
import { Typography } from '@mui/material';

const GITHUB_PROFILE = process.env.GITHUB_PROFILE!;

export default async function Projects() {
  const data = await fetch(
    `https://api.github.com/users/${GITHUB_PROFILE}/starred`,
    { cache: 'force-cache' }
  );
  let projects: ProjectType[] = await data.json();
  projects = projects.filter((p) => p.owner.login === GITHUB_PROFILE);

  return (
    <>
      <Grid textAlign='center' mb={4}>
        <Typography gutterBottom variant='h5'>
          Here&apos;s a list of my starred projects on GitHub!
        </Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 4, sm: 4, md: 4 }}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
