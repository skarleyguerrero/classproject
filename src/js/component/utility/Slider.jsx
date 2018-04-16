import ImageGallery from 'react-image-gallery';
import React from "react";

export default class SimpleSlider extends React.Component {

  render() {

    const images = [
      {
        original: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner21.jpg",
        thumbnail: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner21.jpg"
      },
      {
        original: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner22.jpg",
        thumbnail: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner22.jpg"
      },
      {
       original: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner23.jpg",
        thumbnail: "http://napaatthevineyards.vertilinc.com/Portals/190/images/banner23.jpg"
      }
    ]

    return (
      
      <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} autoPlay={true} showPlayButton={false} slideDuration={550} slideInterval={4000}/>
    );
  }
}