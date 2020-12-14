import React from 'react'
import SwiperCore, { EffectFade, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([EffectFade, Pagination, Autoplay])

class HeroCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: props.slides,
    }
  }

  render() {
    return (
      <section className="section_carousel">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
        >
          {this.props.slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
}

export default HeroCarousel
