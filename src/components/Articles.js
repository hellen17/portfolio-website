import {Card, CardMedia,Typography, CardContent, Button, CardActions} from '@mui/material'
import { makeStyles } from '@mui/styles';
import articlesData from '../articlesData';
import LinkButton from './LinkButton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

const useStyles = makeStyles({
    outlinedButton: {
        '&.MuiButton-outlined': {
            padding: 5,
            borderColor: 'var(--primary-color)',
            color: '#fff'
    }}
})

export default function Articles() {


    const classes = useStyles();
    console.log(articlesData)

    
    

    return (
        <div className="lg:px-32 p-8" id='articles'>
            <h2 className="text-2xl font-bold mb-5" style={{color:'var(--primary-color)'}}>Latest Articles:</h2>
            <p className='mb-5'> I love learning new things related to web development and have realised that the best way to 
            learn is to document and share my thoughts, here are a few of my latest articles.
            </p>

            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 240px
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },

                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                    width: 640,
                    slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                    width: 768,
                    
                    slidesPerView: 2,

                    },
                    // when window width is >= 1024px
                    1024: {
                    width: 1024,
                    slidesPerView: 3,
                    },
                }
                }
                
            >
                {/* <div className='grid lg:grid-cols-3 gap-4'> */}

                {articlesData.map((article, index) => (
                <SwiperSlide>

                    <Card key={index} sx={{ maxWidth: 300, backgroundColor: '#31313F', margin: 1 }} className="mt-3">
                        <div className="bg-gradient-red">
                            <CardMedia
                                sx={{ height: 150,  margin: 1 
                                }}
                                image={article.thumbnail}
                                title={article.title}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'var(--primary-color)',fontWeight: 'bold' }}>
                            {article.title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {article.description}
                            </Typography>

                                               
                        </CardContent>
                        <CardActions>
                        <div className="">
                            <LinkButton href={article.link} variant="contained">Read Article</LinkButton>
                            {/* <Button variant="outlined" component="a" href={article.link} target="_blank" style={{ textTransform: 'none' }} className={classes.outlinedButton}>Read Article</Button> */}
                        </div>
                        </CardActions>
                    </Card>
                </SwiperSlide>

                ))}
                {/* </div> */}

            </Swiper>

            
        </div>
 
    )
}