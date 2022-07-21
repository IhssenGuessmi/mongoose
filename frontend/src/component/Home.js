import React from 'react'
import { Carousel } from 'react-bootstrap'

function Home() {
  return (
    <div>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/788/763/633/digital-art-fantasy-art-artwork-women-wallpaper-preview.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>fantasy-art-artwork-women</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/480/919/600/one-piece-whitebeard-1440x900-anime-one-piece-hd-art-wallpaper-preview.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>whitebeard the stronest men in the sea</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/72/624/1004/anime-one-piece-zoro-roronoa-wallpaper-preview.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5> Roronoa Zoro</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home