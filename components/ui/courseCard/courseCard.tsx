// MUI imports
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// NEXT Imports
import Link from 'next/link';

export interface CoursesCardProps {
    title: string,
    description: string,
    link: string
}

export default function CourseCard(props: CoursesCardProps) {
    return <Card sx={{ minWidth: 275 }} variant="elevation" elevation={4}>
    <Link href={ props.link }>
      <CardActionArea>
        <CardContent>
            <Typography variant='body2' gutterBottom>
                { props.description } 
            </Typography>
            <Typography variant='h5' gutterBottom>
                { props.title } 
            </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
    </Card>
}