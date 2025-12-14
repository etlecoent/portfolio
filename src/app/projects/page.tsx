'use client';

import type { Project as ProjectType } from '@/types/Project';

import { useState, useEffect, use } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Project from './Project';
import { GITHUB_PROFILE } from '@/config';

export default async function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_PROFILE}/starred`, {
      cache: 'force-cache'
    })
      .then((res) => res.json())
      .then((data: ProjectType[]) => {
        const projects = data.filter((p) => p.owner.login === GITHUB_PROFILE);
        setProjects(projects);
      });
  }, []);

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
