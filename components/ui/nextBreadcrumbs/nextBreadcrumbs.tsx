// MUI Imports
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// NEXT Imports
import { useRouter } from 'next/router';

export interface NextBreadcrumbsProps {
  mapTo: {
    from: string,
    to: string
  }
}

export default function NextBreadcrumbs(props: NextBreadcrumbsProps) {
    const router = useRouter();

    // To match [course] in Regex it needs to be escaped \[course\]
    function escapeStringIfBracketsExist(str: string) {
      if (/\[|\]/.test(str)) {
        str = str.replace(/[[\]]/g, '\\$&');
      }
      return str;
    }

    return (
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {
          router.asPath
          .split('/')
          .map((path, index, array) => {
            if (router.route.split('/')[index] === props.mapTo.from) {
              // Replace example: [course]/lessons with <path>/lessons. 
              const newPath = props.mapTo.to.replace(new RegExp(escapeStringIfBracketsExist(router.route.split('/')[index]), 'g'), path);
              const text = path;
              const link = array.slice(0, index).join('/') + "/" + newPath;
              const last = index + 1 == array.length;
              return <Crumb text={text} link={link} last={last} key={text} />
            }
            if (path !== 'lessons') {
              const text = path;
              const link = array.slice(0, index + 1).join('/');
              const last = index + 1 == array.length;
              return <Crumb text={text} link={link} last={last} key={text} />
            }
          })
        }
      </Breadcrumbs>
    );
}

interface CrumbProps {
  text: string,
  link: string,
  last: boolean
}

function Crumb(props: CrumbProps) {

  function capitalize(word: string): string {
    return word
      .toLowerCase()
      .replace(/\w/, (firstLetter: string) => firstLetter.toUpperCase());
  }

  // if (props.last) {
  //   return <Typography color="text.primary">
  //     {capitalize(props.text)}
  //   </Typography>
  // }

  return (
    <Link underline="hover" color="inherit" href={props.link}>
      {capitalize(props.text)}
    </Link>
  );
}