import {Swiper,SwiperSlide } from 'swiper/react'
import songCover from './song cover1.svg'
import songCover2 from './song cover2.svg'
import './carousels.css'
import 'swiper/css';

export default function Carousels() {
    return (
        <div className='carousel-container'>
            <div className='new-release'>
            <h2>New releases.</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2} 
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                    breakpoints= {{
                        540: {
                          slidesPerView: 3,
                          spaceBetween: 15
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40
                        },
                        1024: {
                          slidesPerView: 7,
                          spaceBetween: 50
                        }
                      }}
                >
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>Human</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>2 rocking chairs</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>Munny Right</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>Cautionary Tales</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>Internet</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>Blu</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>crop circles</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>pre occupied</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover}/>
                        <h3>All time low</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='popular-area'>
                <h2>Popular in your area</h2>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2} 
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                    breakpoints= {{
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 50
                        }
                        }}
                >
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Rise</h3>
                        <p>Jonas</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>J' mappele</h3>
                        <p>Tion wayne</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Perfect</h3>
                        <p>Ed sheeran</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Adult Swim</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Pracice makes perfect</h3>
                        <p>SR</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Mr miaggi</h3>
                        <p>Jon snow</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>marvin Gaye</h3>
                        <p>Charlie Puth</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>Smalllest violin</h3>
                        <p>AJR</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={songCover2}/>
                        <h3>All time low</h3>
                        <p>Jon bellion</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}