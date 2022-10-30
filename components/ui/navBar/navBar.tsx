// MUI Imports
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

// Next Imports
import Link from 'next/link';

export interface NavBarProps {
  pages: Array<{ name: string, link: string }>
}

export default function NavBar(props: NavBarProps): JSX.Element {

  return <AppBar position='sticky' color='default'>
    <Toolbar variant='dense'>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: 'inline-block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MathOnTrack
      </Typography>
      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        {props.pages.map((page) => (
          <Link href={page.link} key={page.name}>
            <Button sx={{ color: 'black', display: 'block' }}>{page.name}</Button>
          </Link>
        ))}
      </Box>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        >
          <a href="https://github.com/Mush-A/MathOnTrack" target="blank" >
            <GitHubIcon />
          </a>
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>;
}