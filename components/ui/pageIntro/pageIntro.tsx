// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export interface PageIntroProps {
    title: string,
    image: string,
    children: React.ReactNode,
}

export default function PageIntro(props: PageIntroProps) {

    return <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'space-between' }} columns={{ xs: 4, md: 12 }} >

        <Grid item xs={4} md={6}>
          <Box>
            <Typography variant="h3" component="div" gutterBottom>
              { props.title }
            </Typography>

            <Box color={theme => theme.palette.text.secondary}>
                <Typography variant="body1" component="div" gutterBottom marginBottom={2}>
                    {props.children}
                </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} md={6} sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'flex-end'}}} >
          <Box 
            component={'img'}
            src={ props.image }
            sx={{ maxHeight: '200px' }}
          />
        </Grid>

      </Grid>
}
  