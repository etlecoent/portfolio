import type { Project } from '@/types/Project';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActions';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

export default function Project({ project }: { project: Project }) {
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={<FolderSpecialIcon fontSize='large' />}
        title={<Typography variant='h5'>{project.name}</Typography>}
      />
      <CardContent>
        <Typography variant='body1'>{project.description}</Typography>
      </CardContent>
      <CardAction>
        <Link href={project.html_url} target='_blank' rel='noopener'>
          <IconButton>
            <LinkIcon />
          </IconButton>
        </Link>
      </CardAction>
    </Card>
  );
}
