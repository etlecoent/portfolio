import type { Project } from '@/types/Project';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActions';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

export default function Project({ project }: { project: Project }) {
  return (
    <Card raised>
      <CardHeader
        avatar={<FolderSpecialIcon fontSize='large' />}
        title={
          <Typography noWrap variant='h5'>
            {project.name}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant='body1'>{project.description}</Typography>
      </CardContent>
      <CardAction>
        <IconButton href={project.html_url} target='_blank' rel='noopener'>
          <LinkIcon />
        </IconButton>
      </CardAction>
    </Card>
  );
}
