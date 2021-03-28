import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FadeInText from './components/FadeTextIn/FadeInText'
import './App.css';

class App extends React.Component {
  render() {
    return (
      // TODO: Look into converting this into compondents. Lots of repeated code at the moment.

      // Contain everything within the Parallax. We will use 7 pages
      <Parallax ref={ref => (this.parallax = ref)} pages={7}>
        {/* Begin stars */}
        <ParallaxLayer offset={1} speed={0.3} factor={2} style={{ backgroundSize: 'cover' }}>
          <img src='img/stars.svg' style={{ display: 'block', width: '100%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} factor={1} style={{ backgroundSize: 'cover' }}>
          <img src='img/stars.svg' style={{ display: 'block', width: '100%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1} factor={3} style={{ backgroundSize: 'cover' }}>
          <img src='img/stars.svg' style={{ display: 'block', width: '100%' }} />
        </ParallaxLayer>

        {/* Set planets and moon */}
        <ParallaxLayer offset={0.3} speed={0.7} style={{ opacity: 0.9 }}>
          <img src='img/jupiter.png' style={{ display: 'block', width: '60%', marginLeft: '63%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.0} speed={0.3} style={{ opacity: 0.9 }}>
          <img src='img/mars.png' style={{ display: 'block', width: '30%', marginLeft: '33%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={0.5} style={{ opacity: 0.9 }}>
          <img src='img/moon.png' style={{ display: 'block', width: '20%', marginLeft: '30%' }} />
        </ParallaxLayer>

        {/* Set UFOs */}
        <ParallaxLayer offset={1.7} speed={0.7} style={{ opacity: 0.9 }}>
          <img src='img/ufo2.png' style={{ display: 'block', width: '10%', marginLeft: '23%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.4} style={{ opacity: 0.9 }}>
          <img src='img/ufo1.png' style={{ display: 'block', width: '5%', marginLeft: '43%' }} />
        </ParallaxLayer>

        {/* Set Tesla*/}
        <ParallaxLayer offset={2.6} speed={0.5} style={{ opacity: 0.9 }}>
          <img src='img/tesla.png' style={{ display: 'block', width: '20%', marginLeft: '63%' }} />
        </ParallaxLayer>

        {/* Set Satellite*/}
        <ParallaxLayer offset={4.7} speed={0.4} style={{ opacity: 0.9 }}>
          <img src='img/satellite.png' style={{ display: 'block', width: '10%', marginLeft: '65%' }} />
        </ParallaxLayer>

        {/* Set Balloons*/}
        <ParallaxLayer offset={9.2} speed={0.7} style={{ opacity: 0.9 }}>
          <img src='img/balloon.png' style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={6.2} speed={0.3} style={{ opacity: 0.9 }}>
          <img src='img/balloon.png' style={{ display: 'block', width: '5%', marginLeft: '70%' }} />
        </ParallaxLayer>

        {/* Set Clouds*/}
        <ParallaxLayer offset={9.2} speed={0.8} style={{ opacity: 0.9 }}>
          <img src='img/cloud1.png' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src='img/cloud2.png' style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={8.0} speed={0.4} style={{ opacity: 0.5 }}>
          <img src='img/cloud1.png' style={{ display: 'block', width: '25%', marginLeft: '20%' }} />
          <img src='img/cloud2.png' style={{ display: 'block', width: '20%', marginLeft: '50%' }} />
          <img src='img/cloud1.png' style={{ display: 'block', width: '6%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={8.7} speed={0.6} style={{ opacity: 0.9 }}>
          <img src='img/cloud2.png' style={{ display: 'block', width: '20%', marginLeft: '30%' }} />
          <img src='img/cloud1.png' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={7.5} speed={0.4} style={{ opacity: 0.5 }}>
          <img src='img/cloud1.png' style={{ display: 'block', width: '25%', marginLeft: '70%' }} />
          <img src='img/cloud2.png' style={{ display: 'block', width: '20%', marginLeft: '46%' }} />
          <img src='img/cloud1.png' style={{ display: 'block', width: '6%', marginLeft: '30%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={5.5} speed={0.2} style={{ opacity: 0.7 }}>
          <img src='img/cloud2.png' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src='img/cloud1.png' style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={6.8} speed={0.7} style={{ opacity: 0.2 }}>
          <img src='img/cloud1.png' style={{ display: 'block', width: '25%', marginLeft: '50%' }} />
        </ParallaxLayer>

        <div class="background-gradient">

          {/* Set the Page text */}
          <ParallaxLayer
            offset={6}
            speed={0}
            onClick={() => this.parallax.scrollTo(0)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="text">
              <FadeInText name="SCROLL UP" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={-2}
            onClick={() => this.parallax.scrollTo(9)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="text">
              <FadeInText name="Click to begin" />
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>

    )

  }

}

export default App