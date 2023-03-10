import {Card, CardMedia,Typography, CardContent, Button, CardActions, Chip} from '@mui/material'
import LinkButton from './LinkButton.js';
import projectData from '../projectData.js';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function Project() {


    console.log(projectData)

    
    

    return (
        <div className="lg:px-32 p-8" id='project'>
            <h2 className="text-2xl font-bold mb-5" style={{color:'var(--primary-color)'}}>Featured Projects:</h2>
            <p className='mb-5'>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.
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

                {projectData.map((project, index) => (
                <SwiperSlide>

                    <Card key={index} sx={{ maxWidth: 300, backgroundColor: '#31313F', margin: 1 }} className="mt-3">
                        <div className="bg-gradient-red">
                            <CardMedia
                                sx={{ height: 150,  margin: 1 
                                }}
                                image={project.thumbnail}
                                title={project.name}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'var(--primary-color)',fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {project.name}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {project.description}
                            </Typography>

                            {project.technologies.map(skill => (
                                <Chip key={project.id} label={skill}  className='mr-1 my-2' style={{ backgroundColor:'pink'}} />
                            ))}
                                               
                        </CardContent>
                        <CardActions>
                        <div className="flex mt-5">
                            <LinkButton href={project.live} variant="contained">View Live</LinkButton>
                            <LinkButton href={project.github} outlined >Github Repo</LinkButton>
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