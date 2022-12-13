import './App.css'
import {Swiper, SwiperSlide} from "swiper/react";
import { generatePath } from 'react-router';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {EffectFade, Navigation, Pagination, Keyboard, Autoplay} from "swiper";
import React from "react";
import photo1 from "./static/media/photo_2022-06-07_14-35-43.jpg"
import photo2 from "./static/media/photo_2022-06-07_14-36-12.jpg"
import photo3 from "./static/media/photo_2022-06-07_14-36-20.jpg"

export default function Main() {
    let news = JSON.parse(localStorage.getItem('news'))
    return (
        <div>
            <section className={'one'}>
                <>
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        keyboard={{enabled: true,}}
                        autoplay={{delay: 2500}}
                        modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={photo1} alt={""}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={photo2} alt={""}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={photo3} alt={""}/>
                        </SwiperSlide>
                    </Swiper>
                </>
            </section>
            <div className={'blog-heading'}><h1>Новости</h1></div>
            <section id={"blog"}>
                {news?.map(object => (
                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={require("./static/media/" + object.photo)} alt=""/>
                        </div>
                        <div className="blog-text">
                            <span>{object.upload_at}</span>
                            <a href={generatePath("/news/:id/", {id: object.id,})} className={'blog-title'}>{object.title}</a>
                            <p>{object.short_description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
