import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    outlinedButton: {
        '&.MuiButton-outlined': {
            borderColor: 'var(--primary-color)',
            color: '#fff'
    }}
})


export default function Heroshot(){
    const classes = useStyles();

    return(
        <section className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 w-full">
                <div className="text-left lg:p-32 p-8">
                    <h1 className="text-4xl font-bold pb-5">Hello, i’m <br></br> Jane Doe</h1>
                    <p className="text-2xl">Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
                    <div className="flex mt-5">
                    <Button variant="contained" style={{ textTransform: 'none', marginRight: '1rem', backgroundColor: 'var(--primary-color)' }} startIcon={<PersonIcon />} >About Me</Button>
                    <Button variant="outlined" style={{ textTransform: 'none' }} endIcon={<RemoveRedEyeIcon style={{ color: 'white' }} />}  className={classes.outlinedButton} >Projects</Button>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 w-full mx-auto">
                <img src='./images/hi.png' alt="hero shot" />
            </div>
          
        </section>
    )
}