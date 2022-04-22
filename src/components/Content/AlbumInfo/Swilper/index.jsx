import React, { Component } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'
//autoplay
import SwiperCore, { Autoplay,EffectFade } from 'swiper';
SwiperCore.use([Autoplay]);

export default class SwiperWall extends Component {
    render() {
        return (
        <div>
            <p className='title'>BREAKING NEWS</p>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[EffectFade]} effect="fade"
                autoplay
                loop
            >
                {this.props.value.map(item=>{
                    return <SwiperSlide key={item.data}><img src={item.coverUrl} /><p style={{background:'yellow'}}>{item.title}</p></SwiperSlide>
                })}
            </Swiper>
        </div>
        )
    }
}
