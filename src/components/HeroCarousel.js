import React from 'react'
import SwiperCore, { EffectFade, Pagination, Autoplay, Keyboard, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([EffectFade, Pagination, Autoplay, Keyboard, A11y])

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
          loop={true}
          effect="fade"
          keyboard={{ enabled: true, onlyInViewport: false }}
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
