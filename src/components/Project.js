import {Card, CardMedia,Typography, CardContent, Button, CardActions} from '@mui/material'
import { makeStyles } from '@mui/styles';
import projectData from '../projectData.js';

const useStyles = makeStyles({
    outlinedButton: {
        '&.MuiButton-outlined': {
            borderColor: 'var(--primary-color)',
            color: '#fff'
    }}
})


export default function Project() {
    console.log(projectData)
    const classes = useStyles();

    return (
        <div className="lg:px-32 p-8" id='project'>
            <h2 className="text-2xl font-bold mb-5" style={{color:'var(--primary-color)'}}>Featured Projects:</h2>
            <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.
            </p> 
            <div className='grid lg:grid-cols-3 gap-4'>
                {projectData.map((project) => (
                    <Card sx={{ maxWidth: 300, backgroundColor: '#31313F' }} className="mt-3">
                        <CardMedia
                            sx={{ height: 150,  margin: 1
                            }}
                            image={project.thumbnail}
                            title={project.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'var(--primary-color)',fontWeight: 'bold' }}>
                            {project.name}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <div className="flex mt-5">
                            <Button variant="contained" style={{ textTransform: 'none', marginRight: '1rem', backgroundColor: 'var(--primary-color)' }} >View Live</Button>
                            <Button variant="outlined" style={{ textTransform: 'none' }} className={classes.outlinedButton} >Github Repo</Button>
                        </div>
                        </CardActions>
                    </Card>
                ))}
            </div>
            
        </div>
 
    )
}