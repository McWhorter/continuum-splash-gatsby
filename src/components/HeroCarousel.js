import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

class HeroCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      slides: props.slides,
    }
    this.onchange = this.onchange.bind(this)
  }
  
  onchange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <section className="section__carousel">
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
          draggable={false}
          plugins={[
            'infinite',
          ]}
        />
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </section>
    )
  }
}

export default HeroCarousel
