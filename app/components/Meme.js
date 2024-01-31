'use client';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
const options = {
  arrowPrev: true,
  arrowNext: true,
  zoom: true,
  close: true,
  counter: false,
  bgOpacity: 0.2,
  //padding: { top: 3000, bottom: 3000, left: 3000, right: 3000 },
}

const MyGallery = ({meme}) => (
    <Gallery options={options}>
      <Item
        original={meme.data.url}
        thumbnail={meme.data.url}
        width="1024"
        height="768"
      >
        {({ ref, open }) => ( 
          <img ref={ref} onClick={open} src={meme.data.url} />
        )}
      </Item>
    </Gallery>
  )


export default MyGallery;