import type { Project as ProjectType } from '@/types/Project';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Project from './Project';

const GITHUB_PROFILE = process.env.GITHUB_PROFILE!;

const MOCK_PROJECTS: ProjectType[] = [
  {
    id: 1,
    name: 'Project One',
    html_url: 'yolo',
    description: 'This is project one',
    owner: { login: GITHUB_PROFILE, id: 1 }
  },
  {
    id: 2,
    name: 'Project Two',
    html_url: 'yolo',
    description: 'This is project two',
    owner: { login: GITHUB_PROFILE, id: 1 }
  },
  {
    id: 3,
    name: 'Project Three',
    html_url: 'yolo',
    description: 'This is project three',
    owner: { login: GITHUB_PROFILE, id: 1 }
  },
  {
    id: 4,
    name: 'Project Three',
    html_url: 'yolo',
    description: 'This is project three',
    owner: { login: GITHUB_PROFILE, id: 1 }
  },
  {
    id: 5,
    name: 'Project Three',
    html_url: 'yolo',
    description: 'This is project three',
    owner: { login: GITHUB_PROFILE, id: 1 }
  }
];

export default async function Projects() {
  // const data = await fetch(
  //   `https://api.github.com/users/${GITHUB_PROFILE}/starred`
  // );
  // let projects: ProjectType[] = await data.json();
  let projects: ProjectType[] = MOCK_PROJECTS;
  projects = projects.filter((p) => p.owner.login === GITHUB_PROFILE);

  return (
    <Container>
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
    </Container>
  );
}
