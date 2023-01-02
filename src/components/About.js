import { makeStyles } from '@mui/styles';
import { Paper, Box, Grid} from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TerminalIcon from '@mui/icons-material/Terminal';

const useStyles = makeStyles({
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'flex-end',
      '&:hover': {
        backgroundColor: 'pink',
      },
    },
  });

export default function About() {
    const classes = useStyles();

    return(
        <div className="lg:px-32 p-8" id='about'>
            <h2 className="text-2xl font-bold mb-5" style={{color:'var(--primary-color)'}}>About me:</h2>
            <p>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. 
            </p>
            <div className="flex lg:flex-row flex-col lg:items-center mt-5">
                <p className="text-8xl font-bold" style={{color:'var(--primary-color)'}}>2+</p>
                <p className="lg:ml-8">Years of experience. Specialised in building apps, while ensuring a seamless
                    web experience for end users.</p>

            </div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 180,
                    height: 180,
                    color: 'white',
                    padding: '1rem',
                    backgroundColor: 'lightgrey',


                    },
                }}
                >
                <Paper elevation={0} style={{ backgroundColor: 'var(--primary-color)', }} className={classes.paper}> 
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                        <DesignServicesIcon />
                        </Grid>
                        <Grid item>
                        <b>UI & UX DESIGN</b>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={0} className={classes.paper} >
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                        <TerminalIcon />
                        </Grid>
                        <Grid item>
                        <b>WEB DEVELOPMENT</b>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                        <TerminalIcon />
                        </Grid>
                        <Grid item>
                        <b>WEB DEVELOPMENT</b>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        </div>
    )

}